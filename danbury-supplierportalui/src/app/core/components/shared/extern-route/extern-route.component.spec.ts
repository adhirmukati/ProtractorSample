import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternRouteComponent } from './extern-route.component';

describe('ExternRouteComponent', () => {
  let component: ExternRouteComponent;
  let fixture: ComponentFixture<ExternRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});