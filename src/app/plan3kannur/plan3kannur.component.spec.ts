import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan3kannurComponent } from './plan3kannur.component';

describe('Plan3kannurComponent', () => {
  let component: Plan3kannurComponent;
  let fixture: ComponentFixture<Plan3kannurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan3kannurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan3kannurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
