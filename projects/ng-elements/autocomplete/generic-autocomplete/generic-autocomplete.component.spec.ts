import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericFormsModule } from '../../form/src/generic-forms.module';
import { GenericAutocompleteComponent } from './generic-autocomplete.component';

describe('GenericAutocomplete', () => {

  let fixture: ComponentFixture<GenericAutocompleteComponent>;
  let component: GenericAutocompleteComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        GenericFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GenericAutocompleteComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
})
