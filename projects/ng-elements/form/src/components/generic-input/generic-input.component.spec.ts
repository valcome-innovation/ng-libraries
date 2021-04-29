import { GenericInputComponent } from './generic-input.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericFormsModule } from '../../generic-forms.module';

describe('GenericInputComponent', () => {

  let component: GenericInputComponent;
  let fixture: ComponentFixture<GenericInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        GenericFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GenericInputComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
})
