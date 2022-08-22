import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripthiruvanthapuramComponent } from './tripthiruvanthapuram.component';

describe('TripthiruvanthapuramComponent', () => {
  let component: TripthiruvanthapuramComponent;
  let fixture: ComponentFixture<TripthiruvanthapuramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripthiruvanthapuramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripthiruvanthapuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
