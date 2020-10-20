import { FilePickerDirective } from './file-picker.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FilePickerError } from './file-picker-error';
import { PickedFile } from './picked-file';

describe('FilePickerDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let directive: FilePickerDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [TestComponent, FilePickerDirective],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    const directiveEl = fixture.debugElement.query(By.directive(FilePickerDirective));
    directive = directiveEl.injector.get<FilePickerDirective>(FilePickerDirective);
  });

  it('should initialize directive defaults', () => {
    expect(component).toBeDefined();
    expect(directive).toBeDefined();
    expect(directive).toBeInstanceOf(FilePickerDirective);
    expect(directive.accept).toEqual('');
    expect(directive.maxSize).toEqual(0);
  });

  it('should not be able to use before ngOnInit', () => {
    const input: HTMLInputElement = directive['input'];
    expect(input).toBeFalsy();
  });

  it('should create child input of type file', () => {
    directive.accept = 'text/json';
    directive.ngOnInit();
    const componentElement = document.getElementById('testFilePicker');
    expect(componentElement?.children?.length).toEqual(1);

    const child = componentElement?.children[0];
    const input: HTMLInputElement = directive['input'];

    expect(input.type).toEqual('file');
    expect(input.accept).toEqual(directive.accept);
    expect(input.multiple).toBeFalse();
  });

  it('should set multiple', () => {
    directive.multiple = true;
    directive.ngOnInit();
    const inputElement: any = document.querySelector('input[type=file]');
    const input: HTMLInputElement = directive['input'];
    expect(inputElement).toBeDefined();
    expect(input.multiple).toBeTrue();
  });

  it('should trigger input click on browse', () => {
    directive.ngOnInit();
    const inputElement: any = document.querySelector('input[type=file]');
    expect(inputElement).toBeDefined();

    spyOn(inputElement, 'click');
    directive.browse();
    expect(inputElement.click).toHaveBeenCalled();
  });

  it('should trigger input click on parent click', () => {
    directive.ngOnInit();
    const inputElement: any = document.querySelector('input[type=file]');
    expect(inputElement).toBeDefined();

    spyOn(inputElement, 'click');
    const componentElement = document.getElementById('testFilePicker');
    componentElement?.click();
    expect(inputElement.click).toHaveBeenCalled();
  });

  it('should read file on change event', async () => {
    directive.maxSize = 100;
    directive.ngOnInit();

    const inputElement = document.querySelector('input[type=file]');
    const event: Event = new Event('change');
    const dummyFile: File = new File(['Some text for the file'], 'files.txt');
    Object.defineProperty(event, 'target', { writable: false, value: { files: [dummyFile] } });

    spyOn(directive.filePick, 'emit').and.callThrough();
    await new Promise(resolve => {
      directive.filePick.subscribe((file: PickedFile) => {
        expect(directive.filePick.emit).toHaveBeenCalledWith(file);
        expect(file.name).toEqual(dummyFile.name);
        expect(file.size).toEqual(dummyFile.size);
        expect(file.type).toEqual(dummyFile.type);
        resolve();
      });
      inputElement?.dispatchEvent(event);
    });
  });

  it('should not read file aboce  max size', () => {
    directive.maxSize = 1;
    directive.ngOnInit();

    const inputElement = document.querySelector('input[type=file]');
    const event: Event = new Event('change');
    const dummyFile: File = new File(['Some text for the file'], 'files.txt');
    Object.defineProperty(event, 'target', { writable: false, value: { files: [dummyFile] } });

    spyOn(directive.filePick, 'emit');
    inputElement?.dispatchEvent(event);
    expect(directive.filePick.emit).toHaveBeenCalledWith(FilePickerError.FileTooBig);
  });
});

@Component({
  template: '<div id="testFilePicker" valFilePicker></div>'
})
class TestComponent {
}

