import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan1kozhikodeComponent } from './plan1kozhikode.component';

describe('Plan1kozhikodeComponent', () => {
  let component: Plan1kozhikodeComponent;
  let fixture: ComponentFixture<Plan1kozhikodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan1kozhikodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan1kozhikodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
