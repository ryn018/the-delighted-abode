import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan3thrissurComponent } from './plan3thrissur.component';

describe('Plan3thrissurComponent', () => {
  let component: Plan3thrissurComponent;
  let fixture: ComponentFixture<Plan3thrissurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan3thrissurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan3thrissurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
