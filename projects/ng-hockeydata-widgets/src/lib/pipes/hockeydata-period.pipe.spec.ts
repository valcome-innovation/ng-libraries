import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { HockeydataPeriodPipe } from './hockeydata-period.pipe';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: '<div id="value">{{value | period:1200}}</div>'
})
class TestComponent {
  public value = 0;
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
    changeComponentValue(1200);

    const element = getPeriodElement();

    expect(element.textContent).toEqual('1st');
  }));

  it('should transform two', fakeAsync(() => {
    changeComponentValue(2400);

    const element = getPeriodElement();

    expect(element.textContent).toEqual('2nd');
  }));

  it('should transform three', fakeAsync(() => {
    changeComponentValue(3600);

    const element = getPeriodElement();

    expect(element.textContent).toEqual('3rd');
  }));

  it('should transform any number', fakeAsync(() => {
    changeComponentValue(6000);

    const element = getPeriodElement();

    expect(element.textContent).toEqual(`5th`);
  }));

  it('should transform empty', fakeAsync(() => {
    const element = getPeriodElement();

    expect(element.textContent).toEqual('0th');
  }));

  function changeComponentValue(value: number): void {
    component.value = value;
    fixture.detectChanges();
    flush();
  }

  function getPeriodElement(): HTMLDivElement {
    return fixture.debugElement.query(By.css('#value')).nativeElement;
  }
});
