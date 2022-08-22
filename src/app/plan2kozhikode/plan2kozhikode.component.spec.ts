import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2kozhikodeComponent } from './plan2kozhikode.component';

describe('Plan2kozhikodeComponent', () => {
  let component: Plan2kozhikodeComponent;
  let fixture: ComponentFixture<Plan2kozhikodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan2kozhikodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2kozhikodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
