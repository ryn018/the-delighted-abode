import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan3kasaragodComponent } from './plan3kasaragod.component';

describe('Plan3kasaragodComponent', () => {
  let component: Plan3kasaragodComponent;
  let fixture: ComponentFixture<Plan3kasaragodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan3kasaragodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan3kasaragodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
