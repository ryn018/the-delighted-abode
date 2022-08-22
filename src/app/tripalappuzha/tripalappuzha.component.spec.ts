import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripalappuzhaComponent } from './tripalappuzha.component';

describe('TripalappuzhaComponent', () => {
  let component: TripalappuzhaComponent;
  let fixture: ComponentFixture<TripalappuzhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripalappuzhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripalappuzhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
