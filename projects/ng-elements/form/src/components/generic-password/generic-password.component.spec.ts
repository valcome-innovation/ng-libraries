import { GenericPasswordComponent } from './generic-password.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericFormsModule } from '../../generic-forms.module';

describe('GenericPasswordComponent', () => {

  let component: GenericPasswordComponent;
  let fixture: ComponentFixture<GenericPasswordComponent>;

  let noCapsKey: Partial<KeyboardEvent> = { key: 'f', getModifierState: () => false };
  let capsModifiedKey: Partial<KeyboardEvent> = { key: 'f', getModifierState: m => m === 'CapsLock' };
  let capsLockKey: Partial<KeyboardEvent> = { key: 'CapsLock', getModifierState: m => m === 'CapsLock' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        GenericFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GenericPasswordComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should toggle visibility', () => {
    component.toggleVisibility();

    expect(component.type).toEqual('text');
    expect(component.visibilityLabel).toEqual('Hide');

    component.toggleVisibility();

    expect(component.type).toEqual('password');
    expect(component.visibilityLabel).toEqual('Show');
  });

  it('should display capslock alert', () => {
    component.onKeyUp(noCapsKey as any);
    expect(component.isCapslockActive).toBe(false);

    component.onKeyUp(capsLockKey as any);
    expect(component.isCapslockActive).toBe(true);

    component.onKeyUp(capsModifiedKey as any);
    expect(component.isCapslockActive).toBe(true);

    component.onKeyUp(capsLockKey as any);
    expect(component.isCapslockActive).toBe(false);
  });
});
