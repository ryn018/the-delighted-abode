import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan3idukkiComponent } from './plan3idukki.component';

describe('Plan3idukkiComponent', () => {
  let component: Plan3idukkiComponent;
  let fixture: ComponentFixture<Plan3idukkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan3idukkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan3idukkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
