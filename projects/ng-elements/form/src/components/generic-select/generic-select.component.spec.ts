import { GenericSelectComponent } from './generic-select.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericFormsModule } from '../../generic-forms.module';

describe('GenericSelectComponent', () => {

  let component: GenericSelectComponent;
  let fixture: ComponentFixture<GenericSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        GenericFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GenericSelectComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
})
