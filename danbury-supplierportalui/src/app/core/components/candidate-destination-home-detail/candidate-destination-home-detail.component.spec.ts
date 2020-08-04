import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDestinationHomeDetailComponent } from './candidate-destination-home-detail.component';

describe('CandidateDestinationHomeDetailComponent', () => {
  let component: CandidateDestinationHomeDetailComponent;
  let fixture: ComponentFixture<CandidateDestinationHomeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateDestinationHomeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateDestinationHomeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
