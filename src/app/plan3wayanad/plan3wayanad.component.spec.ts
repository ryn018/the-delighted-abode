import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan3wayanadComponent } from './plan3wayanad.component';

describe('Plan3wayanadComponent', () => {
  let component: Plan3wayanadComponent;
  let fixture: ComponentFixture<Plan3wayanadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan3wayanadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan3wayanadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
