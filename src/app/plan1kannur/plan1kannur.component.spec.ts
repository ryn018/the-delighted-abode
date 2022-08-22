import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan1kannurComponent } from './plan1kannur.component';

describe('Plan1kannurComponent', () => {
  let component: Plan1kannurComponent;
  let fixture: ComponentFixture<Plan1kannurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan1kannurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan1kannurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
