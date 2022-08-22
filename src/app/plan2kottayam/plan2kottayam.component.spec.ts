import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2kottayamComponent } from './plan2kottayam.component';

describe('Plan2kottayamComponent', () => {
  let component: Plan2kottayamComponent;
  let fixture: ComponentFixture<Plan2kottayamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan2kottayamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2kottayamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
