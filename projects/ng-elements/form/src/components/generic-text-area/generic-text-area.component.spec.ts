import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GenericTextAreaComponent } from './generic-text-area.component';
import { GenericFormsModule } from '../../generic-forms.module';
import { FormBuilder } from '@angular/forms';

describe('GenericTextAreaComponent', () => {

  let fixture: ComponentFixture<GenericTextAreaComponent>;
  let component: GenericTextAreaComponent;

  let fb: FormBuilder;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        GenericFormsModule
      ]
    }).compileComponents();

    fb = TestBed.inject(FormBuilder);

    fixture = TestBed.createComponent(GenericTextAreaComponent);
    component = fixture.componentInstance;

    component.form = fb.group({ area: fb.control('')});
    component.formName = 'area';

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
