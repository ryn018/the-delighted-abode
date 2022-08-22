import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan1kottayamComponent } from './plan1kottayam.component';

describe('Plan1kottayamComponent', () => {
  let component: Plan1kottayamComponent;
  let fixture: ComponentFixture<Plan1kottayamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan1kottayamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan1kottayamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
