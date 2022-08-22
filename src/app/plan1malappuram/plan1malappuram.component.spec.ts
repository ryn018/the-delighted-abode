import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan1malappuramComponent } from './plan1malappuram.component';

describe('Plan1malappuramComponent', () => {
  let component: Plan1malappuramComponent;
  let fixture: ComponentFixture<Plan1malappuramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan1malappuramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan1malappuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
