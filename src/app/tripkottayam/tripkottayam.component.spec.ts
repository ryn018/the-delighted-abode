import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripkottayamComponent } from './tripkottayam.component';

describe('TripkottayamComponent', () => {
  let component: TripkottayamComponent;
  let fixture: ComponentFixture<TripkottayamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripkottayamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripkottayamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
