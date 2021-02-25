import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { HockeydataPeriodPipe } from './hockeydata-period.pipe';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: '<div id="value">{{value | period}}</div>'
})
class TestComponent {
  public value = '';
}

describe('HockeyDataPeriodPipe', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HockeydataPeriodPipe,
        TestComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should transform one', fakeAsync(() => {
    changeComponentValue('1');

    const element = getPeriodElement();

    expect(element.textContent).toEqual('1st');
  }));

  it('should transform two', fakeAsync(() => {
    changeComponentValue('2');

    const element = getPeriodElement();

    expect(element.textContent).toEqual('2nd');
  }));

  it('should transform three', fakeAsync(() => {
    changeComponentValue('3');

    const element = getPeriodElement();

    expect(element.textContent).toEqual('3rd');
  }));

  it('should transform any number', fakeAsync(() => {
    const num = Math.ceil(Math.random() * 100 + 4);
    changeComponentValue(`${num}`);

    const element = getPeriodElement();

    expect(element.textContent).toEqual(`${num}th`);
  }));

  it('should transform empty', fakeAsync(() => {
    const element = getPeriodElement();

    expect(element.textContent).toEqual('');
  }));

  function changeComponentValue(value: string): void {
    component.value = value;
    fixture.detectChanges();
    flush();
  }

  function getPeriodElement(): HTMLDivElement {
    return fixture.debugElement.query(By.css('#value')).nativeElement;
  }
});
