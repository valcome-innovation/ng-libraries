import { GenericPasswordComponent } from './generic-password.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericFormsModule } from '../../generic-forms.module';

describe('GenericPasswordComponent', () => {

  let component: GenericPasswordComponent;
  let fixture: ComponentFixture<GenericPasswordComponent>;

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
});
