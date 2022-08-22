import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan1palakkadComponent } from './plan1palakkad.component';

describe('Plan1palakkadComponent', () => {
  let component: Plan1palakkadComponent;
  let fixture: ComponentFixture<Plan1palakkadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan1palakkadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan1palakkadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
