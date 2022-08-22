import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2palakkadComponent } from './plan2palakkad.component';

describe('Plan2palakkadComponent', () => {
  let component: Plan2palakkadComponent;
  let fixture: ComponentFixture<Plan2palakkadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan2palakkadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2palakkadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
