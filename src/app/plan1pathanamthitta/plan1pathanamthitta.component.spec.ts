import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan1pathanamthittaComponent } from './plan1pathanamthitta.component';

describe('Plan1pathanamthittaComponent', () => {
  let component: Plan1pathanamthittaComponent;
  let fixture: ComponentFixture<Plan1pathanamthittaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan1pathanamthittaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan1pathanamthittaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
