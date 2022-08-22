import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripplakkadComponent } from './tripplakkad.component';

describe('TripplakkadComponent', () => {
  let component: TripplakkadComponent;
  let fixture: ComponentFixture<TripplakkadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripplakkadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripplakkadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
