import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleButtonComponent } from './toggle-button.component';
import { DisplayValue } from '@valcome/ng-core';

describe('ToggleButtonComponent', () => {
  let component: ToggleButtonComponent;
  let fixture: ComponentFixture<ToggleButtonComponent>;

  const value1 = new DisplayValue('yeah', 'yeah');
  const value2 = new DisplayValue('no', 'no');

  const values = [value1, value2] as const;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleButtonComponent],
      imports: [BrowserAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleButtonComponent);
    component = fixture.componentInstance;
    component.values = values;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with default value and index', () => {
    expect(component.activeIndex).toEqual(0);
    expect(component.value).toEqual(value1.value);
  });

  it('should create with second value', () => {
    component.value = value2.value;
    component.ngOnInit();

    expect(component.activeIndex).toEqual(1);
    expect(component.value).toEqual(value2.value);
  });

  it('should toggle value', () => {
    component.setValue(0);

    component.toggleValue();

    expect(component.activeIndex).toEqual(1);
    expect(component.value).toEqual(value2.value);
  });

  it('should emit value on change', done => {
    component.activeIndex = 1;

    component.valueChange.subscribe((value: string) => {
      expect(value).toEqual(value1.value);
      done();
    });

    component.toggleValue();
  });
});
