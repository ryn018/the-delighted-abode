import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripernakulamComponent } from './tripernakulam.component';

describe('TripernakulamComponent', () => {
  let component: TripernakulamComponent;
  let fixture: ComponentFixture<TripernakulamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripernakulamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripernakulamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
