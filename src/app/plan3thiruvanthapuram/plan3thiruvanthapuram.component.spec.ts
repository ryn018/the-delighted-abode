import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan3thiruvanthapuramComponent } from './plan3thiruvanthapuram.component';

describe('Plan3thiruvanthapuramComponent', () => {
  let component: Plan3thiruvanthapuramComponent;
  let fixture: ComponentFixture<Plan3thiruvanthapuramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan3thiruvanthapuramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan3thiruvanthapuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
