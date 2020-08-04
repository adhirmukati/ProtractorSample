import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CandidateContactInfoComponent } from './candidate-contact-info.component';
import { MatCardModule } from '@angular/material';
import { By } from '@angular/platform-browser';
// // import { candidateContactInfoMock } from '/src/UnitTest-Support/Mocks/data.mock';

describe('CandidateContactInfoComponent', () => {
  let component: CandidateContactInfoComponent;
  let fixture: ComponentFixture<CandidateContactInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [CandidateContactInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateContactInfoComponent);
    component = fixture.componentInstance;
    // component.candidateContactInfo = candidateContactInfoMock;
    spyOn(component, 'getContactInfo').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the values from input decorator', () => {
    expect(component.getContactInfo).toHaveBeenCalled();
    expect(component.candidateName).toEqual('Matthew Maturity');
    expect(component.emailId).toEqual('mathew.maturity@gmail.com');
    expect(component.candidateInitials).toEqual('MM');
    expect(component.phoneNumber).toEqual('(987) 654-3210');
  });
  it('check whether the initials are loaded in UI', () => {
    const labelElement = fixture.debugElement.query(By.css('.candidate-short-name'));
    expect(labelElement.nativeElement.innerHTML).toBe('MM');
  });
  it('check whether the name is loaded in UI', () => {
    const labelElement = fixture.debugElement.query(By.css('.candidate-user-name'));
    expect(labelElement.nativeElement.innerHTML).toBe('Matthew Maturity');
  });
  it('check whether the phone number are loaded in UI', () => {
    const labelElement = fixture.debugElement.query(By.css('.phone'));
    expect(labelElement.nativeElement.innerHTML).toBe('(987) 654-3210');
  });
  it('check whether the email are loaded in UI', () => {
    const labelElement = fixture.debugElement.query(By.css('.email'));
    expect(labelElement.nativeElement.innerHTML).toBe('mathew.maturity@gmail.com');
  });
});
