import { BaseUnsavedChangesComponent } from './base-unsaved-changes.component';

describe('BaseUnsavedChangesComponent', () => {
  let component: BaseUnsavedChangesComponent;

  beforeEach(() => {
    component = new BaseUnsavedChangesComponent(false);
  });

  it('should be initialized', () => {
    expect(component).toBeTruthy();
  });

  it('should not have unsaved changes', () => {
    expect(component.doUnsavedChangesExist()).toBeFalse();
    expect(component.unloadNotification()).toBeTrue();
  });

  it('should not have unsaved changes', () => {
    component = new BaseUnsavedChangesComponent(true);
    expect(component.doUnsavedChangesExist()).toBeTrue();
    expect(component.unloadNotification()).toBeFalse();
  });
});
