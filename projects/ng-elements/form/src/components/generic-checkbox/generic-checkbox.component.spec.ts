import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericFormsModule } from '../../generic-forms.module';
import { GenericCheckboxComponent } from './generic-checkbox.component';

describe('GenericCheckboxComponent', () => {

  let component: GenericCheckboxComponent;
  let fixture: ComponentFixture<GenericCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        GenericFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GenericCheckboxComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
})
