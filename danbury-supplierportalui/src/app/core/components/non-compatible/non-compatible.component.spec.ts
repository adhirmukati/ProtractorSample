import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonCompatibleComponent } from './non-compatible.component';

describe('NonCompatibleComponent', () => {
  let component: NonCompatibleComponent;
  let fixture: ComponentFixture<NonCompatibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonCompatibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonCompatibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
