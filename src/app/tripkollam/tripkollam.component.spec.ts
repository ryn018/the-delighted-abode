import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripkollamComponent } from './tripkollam.component';

describe('TripkollamComponent', () => {
  let component: TripkollamComponent;
  let fixture: ComponentFixture<TripkollamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripkollamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripkollamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
