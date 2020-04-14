import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgElementsComponent } from './ng-elements.component';

describe('NgElementsComponent', () => {
  let component: NgElementsComponent;
  let fixture: ComponentFixture<NgElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
