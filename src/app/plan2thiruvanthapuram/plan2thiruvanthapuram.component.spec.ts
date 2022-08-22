import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2thiruvanthapuramComponent } from './plan2thiruvanthapuram.component';

describe('Plan2thiruvanthapuramComponent', () => {
  let component: Plan2thiruvanthapuramComponent;
  let fixture: ComponentFixture<Plan2thiruvanthapuramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan2thiruvanthapuramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2thiruvanthapuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
