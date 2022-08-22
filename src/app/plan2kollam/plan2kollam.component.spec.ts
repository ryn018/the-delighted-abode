import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2kollamComponent } from './plan2kollam.component';

describe('Plan2kollamComponent', () => {
  let component: Plan2kollamComponent;
  let fixture: ComponentFixture<Plan2kollamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan2kollamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2kollamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
