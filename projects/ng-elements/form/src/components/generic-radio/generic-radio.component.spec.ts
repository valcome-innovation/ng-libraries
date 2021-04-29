import { GenericSelectComponent } from '../generic-select/generic-select.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericFormsModule } from '../../generic-forms.module';
import { GenericRadioComponent } from './generic-radio.component';

describe('GenericSelectComponent', () => {

  let component: GenericRadioComponent;
  let fixture: ComponentFixture<GenericRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        GenericFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GenericRadioComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
})
