import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateQuoteInfoComponent } from './candidate-quote-info.component';
import { quoteResponseDataMock, quoteResponseWithOutStorageDataMock } from 'src/UnitTest-Support/Mocks/data.mock';
import { By } from '@angular/platform-browser';
describe('CandidateQuoteInfoComponent', () => {
  let component: CandidateQuoteInfoComponent;
  let fixture: ComponentFixture<CandidateQuoteInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateQuoteInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateQuoteInfoComponent);
    component = fixture.componentInstance;
    component.quoteResponse= quoteResponseDataMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Initialze the quoteResponseInfo object', () => {
    expect(component.setQuoteInfo()).toHaveBeenCalled();
    expect(component.quoteResponseInfo).toEqual(quoteResponseDataMock);
    expect(component.moveType).toEqual("Regular");
    expect(component.vaneLineCost).toEqual("2,000 USD");
    expect(component.estimatedDistance).toEqual("3000 Miles");    
    expect(component.estimatedWeight).toEqual("4444 Lb");
    expect(component.storageCost).toEqual("5555 USD");
    expect(component.storageCost).toEqual("20");
  });

  
  it('should show None text when Storage details are not in quote response', () => {
component.quoteResponse= quoteResponseWithOutStorageDataMock;
    expect(component.setQuoteInfo()).toHaveBeenCalled();
    expect(component.quoteResponseInfo).toEqual(quoteResponseWithOutStorageDataMock);    

    var storageDiv = fixture.debugElement.query(By.css("noneTile"));
    expect(storageDiv.nativeElement.value).toBe('None');
  });

});
