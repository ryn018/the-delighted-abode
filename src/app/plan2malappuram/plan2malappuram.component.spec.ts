import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2malappuramComponent } from './plan2malappuram.component';

describe('Plan2malappuramComponent', () => {
  let component: Plan2malappuramComponent;
  let fixture: ComponentFixture<Plan2malappuramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan2malappuramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2malappuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
