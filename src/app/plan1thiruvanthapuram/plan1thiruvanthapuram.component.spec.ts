import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan1thiruvanthapuramComponent } from './plan1thiruvanthapuram.component';

describe('Plan1thiruvanthapuramComponent', () => {
  let component: Plan1thiruvanthapuramComponent;
  let fixture: ComponentFixture<Plan1thiruvanthapuramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan1thiruvanthapuramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan1thiruvanthapuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
