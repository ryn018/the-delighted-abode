import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan3palakkadComponent } from './plan3palakkad.component';

describe('Plan3palakkadComponent', () => {
  let component: Plan3palakkadComponent;
  let fixture: ComponentFixture<Plan3palakkadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan3palakkadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan3palakkadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
