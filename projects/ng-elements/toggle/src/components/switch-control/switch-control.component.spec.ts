import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SwitchControlComponent } from './switch-control.component';

describe('SwitchControlComponent', () => {

  let fixture: ComponentFixture<SwitchControlComponent>;
  let component: SwitchControlComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        SwitchControlComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchControlComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
