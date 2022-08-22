import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2alappuzhaComponent } from './plan2alappuzha.component';

describe('Plan2alappuzhaComponent', () => {
  let component: Plan2alappuzhaComponent;
  let fixture: ComponentFixture<Plan2alappuzhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan2alappuzhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2alappuzhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
