import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2kannurComponent } from './plan2kannur.component';

describe('Plan2kannurComponent', () => {
  let component: Plan2kannurComponent;
  let fixture: ComponentFixture<Plan2kannurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan2kannurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2kannurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
