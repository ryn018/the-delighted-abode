import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan3kottayamComponent } from './plan3kottayam.component';

describe('Plan3kottayamComponent', () => {
  let component: Plan3kottayamComponent;
  let fixture: ComponentFixture<Plan3kottayamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan3kottayamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan3kottayamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
