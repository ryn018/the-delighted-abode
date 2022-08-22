import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan3malappuramComponent } from './plan3malappuram.component';

describe('Plan3malappuramComponent', () => {
  let component: Plan3malappuramComponent;
  let fixture: ComponentFixture<Plan3malappuramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan3malappuramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan3malappuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
