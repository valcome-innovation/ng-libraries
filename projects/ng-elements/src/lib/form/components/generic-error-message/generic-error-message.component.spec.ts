import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericErrorMessageComponent } from './generic-error-message.component';

describe('GenericErrorMessageComponent', () => {
  let component: GenericErrorMessageComponent;
  let fixture: ComponentFixture<GenericErrorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericErrorMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
