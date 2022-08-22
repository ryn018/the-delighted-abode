import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2ernakulamComponent } from './plan2ernakulam.component';

describe('Plan2ernakulamComponent', () => {
  let component: Plan2ernakulamComponent;
  let fixture: ComponentFixture<Plan2ernakulamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan2ernakulamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2ernakulamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
