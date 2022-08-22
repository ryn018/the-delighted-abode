import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrippathanamthittaComponent } from './trippathanamthitta.component';

describe('TrippathanamthittaComponent', () => {
  let component: TrippathanamthittaComponent;
  let fixture: ComponentFixture<TrippathanamthittaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrippathanamthittaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrippathanamthittaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
