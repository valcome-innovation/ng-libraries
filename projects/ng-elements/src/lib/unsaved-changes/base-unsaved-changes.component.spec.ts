import { BaseUnsavedChangesComponent } from './base-unsaved-changes.component';
import { TestBed } from '@angular/core/testing';
import { UnsavedChangesGuard } from './unsaved-changes.guard';

describe('BaseUnsavedChangesGuard', () => {
  let component: BaseUnsavedChangesComponent;
  let guard: UnsavedChangesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsavedChangesGuard]
    });

    component = new BaseUnsavedChangesComponent(false);
    guard = TestBed.inject(UnsavedChangesGuard);
  });

  it('should be initialized', () => {
    expect(guard).toBeTruthy();
  });

  it('should can deactivate by default', () => {
    expect(guard.canDeactivate(component, null, null)).toBeTrue();
  });

  it('should open confirm alert with unsaved changes', () => {
    spyOn(window, 'confirm');

    component = new BaseUnsavedChangesComponent(true);
    expect(component.doUnsavedChangesExist()).toBeTrue();

    guard.canDeactivate(component, null, null);
    expect(window.confirm).toHaveBeenCalled();
  });

});
