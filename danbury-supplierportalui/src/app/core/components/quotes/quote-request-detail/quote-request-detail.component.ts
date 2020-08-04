import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  HostListener
} from '@angular/core';
import { MatExpansionPanel, MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CandidateContactInfo } from '../../../../core/models/candidate-contact-info.model';
import { CandidateMoveInfo } from '../../../../core/models/candidate-move-info.model';
import { DepatureHomeDetails } from '../../../../core/models/depature-home-details.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OverlayConfig, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CandidateBudgetDetails } from '../../../../core/models/candidate-budget-details.model';
import { QuoteResponseComponent } from '../quote-response/quote-response.component';
import { quoteRequest } from '../../../models/quote-request';
import { CandidateInfo } from 'src/app/core/models/candidate-info.models';
import { QuoteRequestService } from 'src/app/core/services/quote-request.service';
import { QuoteAcceptData } from 'src/app/core/models/quote-accept-data.model';
import { response } from 'express';
import { NotificationsService } from 'src/app/core/services/notifications.service';
import { quoteResponse } from 'src/app/core/models/quote-response.model';


@Component({
  selector: 'app-quote-request-detail',
  templateUrl: './quote-request-detail.component.html',
  styleUrls: ['./quote-request-detail.component.scss']
})
export class QuoteRequestDetailComponent implements OnInit, OnDestroy {

  /** used to store candidate info */
  candidateBudgetDetails: CandidateBudgetDetails;
  /**candidateInfo of type CandidateInfo */
  candidateInfo: CandidateInfo;
  /**mat accordion panel header height */
  matExpansionHeaderHeight = '40px';
  /**candidateContactInfo of type CandidateContactInfo */
  candidateContactInfo: CandidateContactInfo;
  /**candidateMoveInfo of type CandidateMoveInfo */
  candidateMoveInfo: CandidateMoveInfo;
  /** stores candidate departure home details information */
  candidateDepartureInfo: DepatureHomeDetails;
  /** Holds the candidate name*/
  candidateName: string;
  /** form for move budget details */
  budgetForm: FormGroup;
  /** Holds the Quote Response details */
  quoteResponseInfo: quoteResponse
  /** sets mode to edit/undo */
  mode = 'edit';
  /** overlayRef to hold overlay config */
  overlayRef: OverlayRef;
  /** screenWidth to hold screen width */
  screenWidth: any;
  /** Subscription prop for unsubscribing services */
  private readonly subscription: Subscription = new Subscription();

  quote: any;

  isQuoteAccepted: boolean = false;

  isQuotePending: boolean = false;

  quoteAcceptData: QuoteAcceptData;

  errorMessage = 'We are unable to process your request at this time. Please try again later.';

  /**
   * Injecting the dependencies
   * @param activatedRoute Instance of ActivatedRoute
   * @param spinner Instance of NgxSpinnerService
   * @param formBuilder FormBuilder variable
   * @param overlay Overlay injection
   * @param positionService PopupPositionService injection
   * @param dialog Matdialog object
   */
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly spinner: NgxSpinnerService,
    private readonly notificationsService: NotificationsService,
    private readonly quoteRequestService: QuoteRequestService,
    private readonly formBuilder: FormBuilder,
    private readonly overlay: Overlay,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.budgetForm = this.formBuilder.group({
      MoveBudget: ['', Validators.compose([
        Validators.pattern('^[1-9,]*[0-9]*$'),
        Validators.maxLength(20)
      ])
      ]
    });
    this.getScreenSize();
    this.quote = this.router.getCurrentNavigation().extras.state;    
    this.setQuoteRequestDetails(this.quote);
    if (this.quote.quoteStatus == 'Quote Pending') {
      this.isQuotePending = true;
    }
    if (this.quote.quoteStatus == 'Quote Accepted') {
      this.isQuoteAccepted = true;
    }
  }
  /** To initialise the component */
  ngOnInit() { }

  /** Get screen width */
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
  }

  setQuoteRequestDetails(quote: any) {
    this.setCandidateContactDetail(quote);
    this.setCandidateInfo(quote);
    this.setMoveDetails(quote);
    this.setDepartureHomeDetails(quote);
    this.setCandidateName();
    this.setCandidateInfo(quote);
    this.setQuoteResponseInfo(quote);
  }

  setCandidateContactDetail(quote: any) {
    this.candidateContactInfo = {
      candidateName: quote.forDeliveryTo.names[0] + "," + quote.forDeliveryTo.names[1],
      emailId: quote.preferredEmailAddress,
      phoneNumber: Number(quote.preferredPhoneNumber)
    };
  }
  setCandidateInfo(quote: any) {
    this.candidateInfo = {
      orderNumber: quote.orderReference,
      level: '',
      businessUnit: '',
      company: quote.company,
      orderReference: quote.orderReference
    }
  }

  setMoveDetails(quote: any) {
    this.candidateMoveInfo = {
      departure: {
        fullAddress: (quote.departureCity.charAt(0).toUpperCase() + quote.departureCity.slice(1)) + ", " + quote.departureState,
        streetAddress: quote.departureAddress,
        city: quote.departureCity,
        state: quote.departureState,
        zipcode: quote.departurePostalCode,
        country: "USA"
      },
      destination: {
        fullAddress: (quote.destinationCity.charAt(0).toUpperCase() + quote.destinationCity.slice(1)) + ", " + quote.destinationState,
        streetAddress: quote.destinationaddress,
        city: quote.destinationCity,
        state: quote.destinationState,
        zipcode: quote.destinationPostalCode,
        country: "USA"
      },
      totalNumberOfPeople: quote.numberOfPeopleMoving,
      estimatedMoveStartDate: quote.estMoveStartDate,
      estimatedMoveEndDate: quote.estMoveEndDate
    };
  }

  setDepartureHomeDetails(quote: any) {
    this.candidateDepartureInfo = {
      departure: {
        fullAddress: (quote.departureCity.charAt(0).toUpperCase() + quote.departureCity.slice(1)) + "," + quote.departureState,
        streetAddress: quote.departureAddress,
        city: (quote.departureCity.charAt(0).toUpperCase() + quote.departureCity.slice(1)),
        state: (quote.departureState.charAt(0).toUpperCase() + quote.departureState.slice(1)),
        zipcode: quote.departurePostalCode,
        country: quote.departureCountry ? quote.departureCountry : 'USA'
      },
      ownerStatus: quote.ownRent,
      housingType: quote.propertyType,
      noOfRooms: quote.numberRooms.toString()
    };
  }

  /** sets Candidate Name */
  setCandidateName() {
    this.candidateName =
      `${this.candidateContactInfo.candidateName.split(',')[1]} ${this.candidateContactInfo.candidateName.split(',')[0]}`;
  }

  formatToPascalText(inputString:string){
    let result:string='';
    if(inputString.indexOf(' ')!=-1){
      let value = inputString.split(' ');

      value.forEach(element => {
        if(result.length>0)
        result = result + ' ' +this.formatToPascalText(element);
        else
        result = this.formatToPascalText(element);
      });
    }
    else{
      result = inputString.charAt(0).toUpperCase()+inputString.slice(1);
    }
    return result;
  }

  /**
   * Get the keyboard event
   * @param ev instance of KeyboardEvent
   */
  @HostListener('document:keyup', ['$event']) onKeyUp(ev: KeyboardEvent) {
    if (ev.code === 'ArrowUp' || ev.code === 'ArrowDown') {
      this.overlayRef.dispose();
    }
  }

  /** Open quote request response dialog */
  openQuoteRequestResponseDialog(): void {
    const dialogRef = this.dialog.open(QuoteResponseComponent, {
      disableClose: true,
      panelClass: ['dialogMainContainer', 'authorize-dialog-container'],
      data: { orderRequestId: this.quote.orderRequestId, quoteRequestId: this.quote.quoteRequestId }
    });
    this.subscription.add(
      dialogRef.afterClosed().subscribe(
        result => {
          if (result) {
            this.budgetForm.disable();
            this.mode = '';
          }
        })
    );
    dialogRef.componentInstance.submitQuoteResponses.subscribe(
      (result:quoteResponse) => {
        
         this.saveQuoteResponse(result);
        
      })
  }
setQuoteResponseInfo(quote:any){
  if((quote.quoteResponses) && (quote.quoteResponses.length>0))
  {
    let data= quote.quoteResponses[0];
    
    this.quoteResponseInfo={
    orderRequestId : data.orderId,
    quoteRequestId :data.quoteRequestId,
    referenceNumber : data.referenceNumber,
    moveType : data.details.moveType,
    bidAmount : data.bidAmount,
    bidAmountCurrency : data.details.bidAmountCurrency,
    estimatedDistance : data.details.estimatedDistance,
    estimatedWeight : data.details.estimatedWeight,
    bidDate:data.createdAt,
    estimatedWeightUnit:data.details.estimatedWeightUnit,
    estimatedDistanceUnit:data.details.estimatedDistanceUnit

    }
    
    if(data.details.bidAmountStorage){
    this.quoteResponseInfo.bidAmountStorage = data.details.bidAmountStorage;
    this.quoteResponseInfo.bidAmountStorageCurrency = data.details.bidAmountStorageCurrency;
    }
    if(data.details.daysInStorage){
      this.quoteResponseInfo.daysInStorage = data.details.daysInStorage;
    }



  }
}
  saveQuoteResponse(data :quoteResponse)
  {
    this.spinner.show();
    this.quoteRequestService.sendQuoteResponse(data).subscribe(
      (response) => {
        
        this.spinner.hide();
        this.notificationsService.flashNotification(
          'success',
          "Quote submitted for "+this.formatToPascalText(this.candidateName),
          true,
          'dismiss'
        );
        
         this.router.navigate(['/quotes-request']);
      },
      (err) => {
        this.spinner.hide();
        
        this.notificationsService.flashNotification(
          'error',
          err.message,
          true,
          'dismiss'
        );
         this.router.navigate(['/quotes-request']);
      }
    );

  }

  onAcceptClick() {
    this.spinner.show();
    let dateobj = new Date();
    this.quoteAcceptData = {
      orderRequestId: this.quote.orderRequestId,
      quoteRequestId: this.quote.quoteRequestId,
      accept: dateobj
    }
    this.quoteRequestService.sendQuoteAcceptData(this.quoteAcceptData).subscribe(response => {
      this.quoteAccepted(response);
    })
  }

  quoteAccepted(response) {
    this.spinner.hide();
    if (response !== null) {
      this.isQuoteAccepted = true;
      this.flashAndCloseDialog(response);
      this.router.navigate(['/quotes-request']);
    } else {
      this.notificationsService.flashNotification(
        'error',
        this.errorMessage,
        true,
        'dismiss'
      );
      this.router.navigate(['/quotes-request']);
    }
  }

  /**
   * function to flash message and close dialog
   * @param response string
   */
  flashAndCloseDialog(message: string) {
    this.notificationsService.flashNotification(
      'success',
      "Quote Accepted for " + (this.quote.forDeliveryTo.names[0].charAt(0).toUpperCase() + this.quote.forDeliveryTo.names[0].slice(1)) + " " + (this.quote.forDeliveryTo.names[1].charAt(0).toUpperCase() + this.quote.forDeliveryTo.names[1].slice(1)),
      true,
      'dismiss'
    );
  }

  /**
   * destroys the object
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
