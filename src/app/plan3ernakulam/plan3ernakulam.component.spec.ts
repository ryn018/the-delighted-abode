import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan3ernakulamComponent } from './plan3ernakulam.component';

describe('Plan3ernakulamComponent', () => {
  let component: Plan3ernakulamComponent;
  let fixture: ComponentFixture<Plan3ernakulamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan3ernakulamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan3ernakulamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
