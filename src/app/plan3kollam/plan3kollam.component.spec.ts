import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan3kollamComponent } from './plan3kollam.component';

describe('Plan3kollamComponent', () => {
  let component: Plan3kollamComponent;
  let fixture: ComponentFixture<Plan3kollamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan3kollamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan3kollamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
