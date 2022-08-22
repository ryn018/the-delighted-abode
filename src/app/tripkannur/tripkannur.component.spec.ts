import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripkannurComponent } from './tripkannur.component';

describe('TripkannurComponent', () => {
  let component: TripkannurComponent;
  let fixture: ComponentFixture<TripkannurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripkannurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripkannurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
