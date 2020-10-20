import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FileDropzoneDirective } from './file-dropzone.directive';
import { By } from '@angular/platform-browser';

describe('FileDropzoneDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let directive: FileDropzoneDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [TestComponent, FileDropzoneDirective],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    let directiveEl = fixture.debugElement.query(By.directive(FileDropzoneDirective));
    directive = directiveEl.injector.get<FileDropzoneDirective>(FileDropzoneDirective);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(directive).toBeTruthy();
  });
});

@Component({
  template: '<div id="testFilePicker" valFileDropzone></div>'
})
class TestComponent {
}
