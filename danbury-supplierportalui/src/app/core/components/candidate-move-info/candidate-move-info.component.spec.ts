import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateMoveInfoComponent } from './candidate-move-info.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { candidateMoveInfoMock } from 'src/UnitTest-Support/Mocks/data.mock';
import { By } from '@angular/platform-browser';

describe('CandidateMoveInfoComponent', () => {
  let component: CandidateMoveInfoComponent;
  let fixture: ComponentFixture<CandidateMoveInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
      declarations: [CandidateMoveInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateMoveInfoComponent);
    component = fixture.componentInstance;
    component.candidateMoveInfo = candidateMoveInfoMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialise the values from input decorator', () => {
    expect(component.departureAdd).toBe('8 Passaic Ave, Boston, MA 01234');
    expect(component.destinationAdd).toBe('dummy full address');
    expect(component.totalNumberOfPeople).toBe('4');
    expect(component.estimatedMoveStartDate).toBe('12/22/2019');
    expect(component.estimatedMoveEndDate).toBe('04/12/2019');
  });
  it('check whether the values are loaded in UI', () => {
    const Departure = fixture.debugElement.query(By.css('.departure'));
    expect(Departure.nativeElement.value).toBe('8 Passaic Ave, Boston, MA 01234');
    const Destination = fixture.debugElement.query(By.css('.destination'));
    expect(Destination.nativeElement.value).toBe('dummy full address');
    const totalPeople = fixture.debugElement.query(By.css('.totalPeople'));
    expect(totalPeople.nativeElement.value).toBe('4');
    const startDate = fixture.debugElement.query(By.css('.startDate'));
    expect(startDate.nativeElement.value).toBe('2019-12-22');
    const endDate = fixture.debugElement.query(By.css('.endDate'));
    expect(endDate.nativeElement.value).toBe('2019-04-12');
  });
});
