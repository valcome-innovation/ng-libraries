import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialDemoComponent } from './social-demo.component';

describe('DemoComponent', () => {
  let component: SocialDemoComponent;
  let fixture: ComponentFixture<SocialDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialDemoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
