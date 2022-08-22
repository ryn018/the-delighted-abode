import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2pathanamthittaComponent } from './plan2pathanamthitta.component';

describe('Plan2pathanamthittaComponent', () => {
  let component: Plan2pathanamthittaComponent;
  let fixture: ComponentFixture<Plan2pathanamthittaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan2pathanamthittaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2pathanamthittaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
