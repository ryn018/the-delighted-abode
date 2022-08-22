import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan1wayanadComponent } from './plan1wayanad.component';

describe('Plan1wayanadComponent', () => {
  let component: Plan1wayanadComponent;
  let fixture: ComponentFixture<Plan1wayanadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan1wayanadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan1wayanadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
