import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripidukkiComponent } from './tripidukki.component';

describe('TripidukkiComponent', () => {
  let component: TripidukkiComponent;
  let fixture: ComponentFixture<TripidukkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripidukkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripidukkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
