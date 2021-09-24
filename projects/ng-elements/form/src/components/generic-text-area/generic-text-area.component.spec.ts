import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GenericTextAreaComponent } from './generic-text-area.component';

describe('GenericTextAreaComponent', () => {

  let fixture: ComponentFixture<GenericTextAreaComponent>;
  let component: GenericTextAreaComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        GenericTextAreaComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GenericTextAreaComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
