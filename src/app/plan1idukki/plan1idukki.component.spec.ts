import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan1idukkiComponent } from './plan1idukki.component';

describe('Plan1idukkiComponent', () => {
  let component: Plan1idukkiComponent;
  let fixture: ComponentFixture<Plan1idukkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan1idukkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan1idukkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
