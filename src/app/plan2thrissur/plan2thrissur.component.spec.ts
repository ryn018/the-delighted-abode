import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2thrissurComponent } from './plan2thrissur.component';

describe('Plan2thrissurComponent', () => {
  let component: Plan2thrissurComponent;
  let fixture: ComponentFixture<Plan2thrissurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan2thrissurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2thrissurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
