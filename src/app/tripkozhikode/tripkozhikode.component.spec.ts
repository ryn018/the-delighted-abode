import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripkozhikodeComponent } from './tripkozhikode.component';

describe('TripkozhikodeComponent', () => {
  let component: TripkozhikodeComponent;
  let fixture: ComponentFixture<TripkozhikodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripkozhikodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripkozhikodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
