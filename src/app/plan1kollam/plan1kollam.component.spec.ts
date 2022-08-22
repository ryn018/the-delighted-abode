import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan1kollamComponent } from './plan1kollam.component';

describe('Plan1kollamComponent', () => {
  let component: Plan1kollamComponent;
  let fixture: ComponentFixture<Plan1kollamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan1kollamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan1kollamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
