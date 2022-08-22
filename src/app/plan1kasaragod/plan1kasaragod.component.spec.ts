import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan1kasaragodComponent } from './plan1kasaragod.component';

describe('Plan1kasaragodComponent', () => {
  let component: Plan1kasaragodComponent;
  let fixture: ComponentFixture<Plan1kasaragodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan1kasaragodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan1kasaragodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
