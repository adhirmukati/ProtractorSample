import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionPopUpComponent } from './session-pop-up.component';
import { MatIconModule, MatProgressBarModule, MatDialogModule, MatDialogRef, MatTableModule } from '@angular/material';

describe('SessionPopUpComponent', () => {
  let component: SessionPopUpComponent;
  let fixture: ComponentFixture<SessionPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SessionPopUpComponent],
      imports: [MatIconModule, MatProgressBarModule, MatDialogModule, MatTableModule],
      providers: [{ provide: MatDialogRef, useValue: {} }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
