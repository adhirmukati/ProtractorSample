import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteRequestDetailComponent } from './quote-request-detail.component';
import { quoteDetailDataMock } from 'src/UnitTest-Support/Mocks/data.mock';
import { By } from '@angular/platform-browser';
import { QuoteResponseComponent } from '../quote-response/quote-response.component';
import { QuoteRequestService } from 'src/app/core/services/quote-request.service';
import { of } from 'rxjs';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('QuoteRequestDetailComponent', () => {
  let component: QuoteRequestDetailComponent;
  let fixture: ComponentFixture<QuoteRequestDetailComponent>;
  let quoteRequestService: QuoteRequestService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuoteRequestDetailComponent, QuoteResponseComponent
      ],
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [QuoteResponseComponent],
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteRequestDetailComponent);
    component = fixture.componentInstance;
    component.quote=quoteDetailDataMock;
    quoteRequestService = TestBed.get(QuoteRequestService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check candidateContactInfo data from quote obj', async(() => {
    expect(component.setQuoteRequestDetails).toHaveBeenCalled();    
    expect(component.setCandidateContactDetail).toHaveBeenCalled();
    expect(component.candidateContactInfo.emailId).toEqual('vasudev.bhat@mobilitydba.com');
    expect(component.candidateContactInfo.phoneNumber).toEqual(9483186755);
    expect(component.candidateContactInfo.candidateName).toEqual('Mathew,Henry')
  }));

  it('should check ordernumber and company assigned from quote obj',()=>{
    expect(component.setQuoteRequestDetails).toHaveBeenCalled();
    expect(component.setCandidateInfo).toHaveBeenCalled();
    expect(component.candidateInfo.orderNumber).toEqual('MOV-89zk39gj');
    expect(component.candidateInfo.company).toEqual('Oracle Inc.');  
  });

  it('should check move detail assigned from quote obj',()=>{
    expect(component.setQuoteRequestDetails).toHaveBeenCalled();
    expect(component.setMoveDetails).toHaveBeenCalled();
    expect(component.candidateMoveInfo.departure.fullAddress).toEqual('Newyork, NC');
    expect(component.candidateMoveInfo.departure.country).toEqual('USA');  
    expect(component.candidateMoveInfo.destination.fullAddress).toEqual('Davis, CA');
    expect(component.candidateMoveInfo.totalNumberOfPeople).toEqual('2');
    expect(component.candidateMoveInfo.estimatedMoveEndDate).toEqual('2020-05-01');
    expect(component.candidateMoveInfo.estimatedMoveStartDate).toEqual('2020-05-15');
  });

  it('should check departureHome details assigned from quote obj',()=>{
    expect(component.setQuoteRequestDetails).toHaveBeenCalled();
    expect(component.setDepartureHomeDetails).toHaveBeenCalled();
    expect(component.candidateDepartureInfo.departure.fullAddress).toEqual('Newyork, NC');
    expect(component.candidateDepartureInfo.departure.country).toEqual('USA');  
    expect(component.candidateDepartureInfo.departure.zipcode).toEqual('08922');
    expect(component.candidateDepartureInfo.housingType).toEqual('Apartment/Condo/Co-op');
    expect(component.candidateDepartureInfo.noOfRooms).toEqual('3');
    expect(component.candidateDepartureInfo.ownerStatus).toEqual('own');
  });

  it('should check whether departure and destination  are dsplayed', () => {
    fixture.whenStable().then(() => {
      const divElement = fixture.debugElement.query(By.css('.header-right-node'));
      expect(divElement.children[0].nativeElement.value).toBe('Newyork, NC');
      expect(divElement.children[2].nativeElement.value).toBe('Davis, CA');
    });
  });

  it('should call onAcceptClick method', () => {
    spyOn(quoteRequestService, 'sendQuoteAcceptData').and.callFake(() => {
      return of('Quote Accepted');
    });
    component.quoteAcceptData.orderRequestId = '5e57b8becea80500088b3abd';
    component.quoteAcceptData.quoteRequestId = '5e57be808a8262000888b73a';
    component.quoteAcceptData.accept = new Date();
    spyOn(component, 'onAcceptClick').and.callThrough();
    component.onAcceptClick();
    expect(component.quoteAcceptData).toHaveBeenCalledTimes(1);
  });

  it('should check quote details has been assigned from Quote Object',()=>{
    expect(component.setQuoteRequestDetails).toHaveBeenCalled();
    expect(component.setQuoteResponseInfo).toHaveBeenCalled();
    expect(component.quoteResponseInfo.referenceNumber).toBe('BHAA2A-1223');
    expect(component.quoteResponseInfo.moveType).toBe('regular');
    expect(component.quoteResponseInfo.bidAmount).toBe('2222');
    expect(component.quoteResponseInfo.estimatedDistance).toBe('222');
    expect(component.quoteResponseInfo.estimatedWeight).toBe('222');
    expect(component.quoteResponseInfo.bidAmountStorage).toBe('222');
    expect(component.quoteResponseInfo.daysInStorage).toBeUndefined(true);
  });

});

