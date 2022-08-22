import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripwayanadComponent } from './tripwayanad.component';

describe('TripwayanadComponent', () => {
  let component: TripwayanadComponent;
  let fixture: ComponentFixture<TripwayanadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripwayanadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripwayanadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
