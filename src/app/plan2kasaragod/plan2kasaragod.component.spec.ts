import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2kasaragodComponent } from './plan2kasaragod.component';

describe('Plan2kasaragodComponent', () => {
  let component: Plan2kasaragodComponent;
  let fixture: ComponentFixture<Plan2kasaragodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan2kasaragodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2kasaragodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
