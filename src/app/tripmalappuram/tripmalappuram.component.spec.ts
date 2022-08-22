import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripmalappuramComponent } from './tripmalappuram.component';

describe('TripmalappuramComponent', () => {
  let component: TripmalappuramComponent;
  let fixture: ComponentFixture<TripmalappuramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripmalappuramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripmalappuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
