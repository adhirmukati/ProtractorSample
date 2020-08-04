import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CandidateInfoComponent } from './candidate-info.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { candidateInfo, candidateInformation } from 'src/UnitTest-Support/Mocks/data.mock';
import { By } from '@angular/platform-browser';

describe('CandidateInfoComponent', () => {
  let component: CandidateInfoComponent;
  let fixture: ComponentFixture<CandidateInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
      declarations: [CandidateInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateInfoComponent);
    component = fixture.componentInstance;
    component.candidateInfo = candidateInformation;
    spyOn(component, 'getContactInfo').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the values from input decorator', () => {
    expect(component.getContactInfo).toHaveBeenCalled();
    expect(component.businessUnit).toEqual('Human Resources');
    expect(component.level).toEqual('Level 2 ($75,000 - $150,000)');
    expect(component.company).toEqual('Four Seasons Biltmore');
    expect(component.orderNumber).toEqual('MOV-9896a55r');
    expect(component.orderReference).toEqual('MOV-9896a55r');
  });
  it('should check whether ordernumber are loaded in UI', () => {
    fixture.whenStable().then(() => {
      const labelElement = fixture.debugElement.query(By.css('.businessUnit'));
      expect(labelElement.nativeElement.value).toBe('MOV-9896a55r');     
    });
  });

  it('should check whether company are loaded in UI', () => {
    fixture.whenStable().then(() => {
      const inputElement = fixture.debugElement.query(By.css('.level'));
      expect(inputElement.nativeElement.value).toBe('Four Seasons Biltmore');
    });
  });

});
