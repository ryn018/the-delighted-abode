import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2idukkiComponent } from './plan2idukki.component';

describe('Plan2idukkiComponent', () => {
  let component: Plan2idukkiComponent;
  let fixture: ComponentFixture<Plan2idukkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan2idukkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2idukkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
