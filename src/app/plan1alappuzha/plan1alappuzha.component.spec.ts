import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan1alappuzhaComponent } from './plan1alappuzha.component';

describe('Plan1alappuzhaComponent', () => {
  let component: Plan1alappuzhaComponent;
  let fixture: ComponentFixture<Plan1alappuzhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan1alappuzhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan1alappuzhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
