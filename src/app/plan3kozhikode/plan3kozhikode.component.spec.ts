import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan3kozhikodeComponent } from './plan3kozhikode.component';

describe('Plan3kozhikodeComponent', () => {
  let component: Plan3kozhikodeComponent;
  let fixture: ComponentFixture<Plan3kozhikodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan3kozhikodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan3kozhikodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
