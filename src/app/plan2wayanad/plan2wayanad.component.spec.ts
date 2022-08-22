import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2wayanadComponent } from './plan2wayanad.component';

describe('Plan2wayanadComponent', () => {
  let component: Plan2wayanadComponent;
  let fixture: ComponentFixture<Plan2wayanadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan2wayanadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2wayanadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
