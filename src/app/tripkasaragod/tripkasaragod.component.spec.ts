import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripkasaragodComponent } from './tripkasaragod.component';

describe('TripkasaragodComponent', () => {
  let component: TripkasaragodComponent;
  let fixture: ComponentFixture<TripkasaragodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripkasaragodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripkasaragodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
