import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeCoreComponent } from './node-core.component';

describe('NodeCoreComponent', () => {
  let component: NodeCoreComponent;
  let fixture: ComponentFixture<NodeCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
