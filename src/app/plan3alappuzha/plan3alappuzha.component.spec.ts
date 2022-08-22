import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan3alappuzhaComponent } from './plan3alappuzha.component';

describe('Plan3alappuzhaComponent', () => {
  let component: Plan3alappuzhaComponent;
  let fixture: ComponentFixture<Plan3alappuzhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan3alappuzhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan3alappuzhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
