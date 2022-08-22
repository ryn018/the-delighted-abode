import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan3pathanamthittaComponent } from './plan3pathanamthitta.component';

describe('Plan3pathanamthittaComponent', () => {
  let component: Plan3pathanamthittaComponent;
  let fixture: ComponentFixture<Plan3pathanamthittaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan3pathanamthittaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan3pathanamthittaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
