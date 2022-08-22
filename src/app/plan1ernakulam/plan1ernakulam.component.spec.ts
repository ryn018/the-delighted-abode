import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan1ernakulamComponent } from './plan1ernakulam.component';

describe('Plan1ernakulamComponent', () => {
  let component: Plan1ernakulamComponent;
  let fixture: ComponentFixture<Plan1ernakulamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan1ernakulamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan1ernakulamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
