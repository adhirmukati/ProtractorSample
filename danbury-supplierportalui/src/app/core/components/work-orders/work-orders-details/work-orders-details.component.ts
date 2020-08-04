import { Component, OnInit, OnDestroy, ElementRef, HostListener } from '@angular/core';
import { MatExpansionPanel, MatDialog, MatSnackBar, MatDialogRef ,MAT_DIALOG_DATA } from '@angular/material';
import { CandidateBudgetDetails } from 'src/app/core/models/candidate-budget-details.model';
import { CandidateContactInfo } from 'src/app/core/models/candidate-contact-info.model';
import { CandidateMoveInfo } from 'src/app/core/models/candidate-move-info.model';
import { DepatureHomeDetails } from 'src/app/core/models/depature-home-details.models';
import { CandidateCoreBenefits } from 'src/app/core/models/candidate-core-benifits.models';
import { CandidateFlexSpend } from 'src/app/core/models/candidate-flex-spend.model';
import { budgetCurrency, taxIncludedMessgae, taxNotIncludedMessage, apiErrorMessage, notice, taxInfoIncluded, warning, taxInfoNotIncluded } from 'src/app/core/models/constants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OverlayRef, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';
import { RelocationOfferInfo } from 'src/app/core/models/relo-offer.model';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PopupPositionService } from 'src/app/core/services/popup-position.service';
import { LoggerService } from 'src/app/core/services/logger.service';
import { LoggedInUserService } from 'src/app/core/services/loggedin-user-service';
import { formatNumber } from '@angular/common';
import { CloseScrollStrategyConfig } from '@angular/cdk/overlay/typings/scroll/close-scroll-strategy';
import { ComponentPortal } from '@angular/cdk/portal';
import { OverlayTooltipComponent } from '../../shared/overlay-tooltip/overlay-tooltip.component';
import { APIResponse } from 'src/app/core/models/response.model';
import { QuoteResponseComponent } from '../../quotes/quote-response/quote-response.component';
import { EditKeysComponent } from '../../edit-keys/edit-keys.component';
import {AgentInformationComponent} from './agent-information/agent-information.component';
import {EstimatedKeyDates} from '../../../models/key-dates.model';
import {ActualKeyDates} from '../../../models/key-dates.model';
import { WorkOrderService } from '../../../services/work-order.service';
import { DestinationHomeDetails } from '../../../models/destination-home-details.model';
import { quoteResponse } from "../../../models/quote-response.model";
import { NotificationsService } from 'src/app/core/services/notifications.service';
import { AgentInformationService } from 'src/app/core/services/agent-information.service';
import { AgentInformation } from 'src/app/core/models/agent-information.model';

@Component({
  selector: 'app-work-orders-details',
  templateUrl: './work-orders-details.component.html',
  styleUrls: ['./work-orders-details.component.scss'],
  viewProviders: [MatExpansionPanel]
})

export class WorkOrdersDetailsComponent implements OnInit, OnDestroy {

  /**readOnly */
  refNo ='019293391-D';
  cost= '8,200'; 
  optional = 'N/A';
  moveType = 'Standard';
  weight = '10,400';
  mileage = '3,210';
  name = 'James Simpkins';
  email = 'james.simpkins@movevanlines.com';
  phone = '(917) 555-1212';
  /**estimatedKeyDates of type EstimatedKeyDates */
  estimatedKeyDates : EstimatedKeyDates;
  /**estimatedKeyDates of type EstimatedKeyDates */
  actualKeyDates : ActualKeyDates;

  editCandidateForm: FormGroup;
  /** used to store candidate info */
  candidateBudgetDetails: CandidateBudgetDetails;
  /**candidateInfo of type CandidateInfo */
  candidateInfo: any;
  /**candidateContactInfo of type CandidateContactInfo */
  candidateContactInfo: CandidateContactInfo;
  /**candidateMoveInfo of type CandidateMoveInfo */
  candidateMoveInfo: CandidateMoveInfo;
  /** stores candidate departure home details information */
  candidateDepartureInfo: DepatureHomeDetails;
  candidateDestinationInfo: DestinationHomeDetails;
  quoteResponseInfo: quoteResponse;
  /** stores core benefits details */
  coreBenefits: CandidateCoreBenefits;
  /** stores flex spend details */
  flexSpendDetails: CandidateFlexSpend;
  /** stores flex and core service total */
  budgetChartDetails;
  /** default departure address */
  departureDefaultAddress = 'Danbury, CT';
  /** Holds the candidate name*/
  candidateName: string;
  /** stores currency */
  currency = budgetCurrency;
  /** form for move budget details */
  budgetForm: FormGroup;
  /** sets flag if move budget lesser than recommended */
  invalidBudget = false;
  /** least recommended move budget */
  minRelocationInvestment;
  /** acceptable move budget value */
  acceptableRelocationInvestment;
  /** sets mode to edit/undo */
  mode = 'edit';
  /** overlayRef to hold overlay config */
  overlayRef: OverlayRef;
  /** screenWidth to hold screen width */
  screenWidth: any;
  /** Subscription prop for unsubscribing services */
  private readonly subscription: Subscription = new Subscription();
  /**flag for check box */
  ifChecked = true;
  /**flag for toggle bar */
  ifSelectedSwitch = true;
  /**property for total expense */
  recommendedMoveBudget;
  /**for storing tax rate */
  taxAssistanceDefault;
  /**property to store total budget amount*/
  totalAmount;
  /**property to have the amount with USD */
  totalBudget;
  /** variable to store the move budget */
  moveBudget;
  /**disable tax for invalid value */
  taxDisable = false;
  /**property to store message for tax included */
  taxIncludedMessgae = taxIncludedMessgae;
  /**property to store message for tax excluded */
  taxNotIncludedMessage = taxNotIncludedMessage;

  /**flag to check whether transferee is authorized or not */
  authorizedTransferee = false;
  /**mat accordion panel header height */
  matExpansionHeaderHeight = '40px';
  /** date of transferee auhtorization */
  authorizedDate;
  /**property to store invoice details */
  invoiceDetails: any;
  /**property to store candidateId */
  candidateId: string;
  /** Stores the client contact ID */
  clientContactId: string;
  workOrderId: string;
  /**property to store RelocationDetails */
  relocationDetails: RelocationOfferInfo = {} as RelocationOfferInfo;
  
  editKeyRef: MatDialogRef<EditKeysComponent>;
  dialogRef: MatDialogRef<AgentInformationComponent>;
  workOrderDetail: any;
  clickedWorkOrder: any;
  details: any
  agentInfo: any;
  arrAgentInformation: Array<AgentInformation>=[];
  workOrderDetailAttributes: Array<any> = [];
  
  isEmptyAgentInfo: boolean = true;
  isKeyDateEmpty: boolean = true;

  errorMessage = 'We are unable to fetch requested data at this time. Please try again later.';

  isWorkDetailApiError: boolean = false;

  /**
   * Injecting the dependencies
   * @param route Instance of ActivatedRoute
   * @param budgetSrvc Instance of BudgetService
   * @param spinner Instance of NgxSpinnerService
   * @param formBuilder FormBuilder variable
   * @param overlay Overlay injection
   * @param positionService PopupPositionService injection
   * @param snackBar to display snack bar
   * @param dialog Matdialog object
   * @param myElement ElementRef instance
   */
  constructor(
    private readonly route: ActivatedRoute,
    private readonly spinner: NgxSpinnerService,
    private readonly formBuilder: FormBuilder,
    private readonly workOrderService : WorkOrderService,
    private readonly overlay: Overlay,
    private readonly positionService: PopupPositionService,
    private agentInformationService: AgentInformationService,
    private notificationService:NotificationsService,
    public dialog: MatDialog,
    private readonly snackBar: MatSnackBar,
    private readonly myElement: ElementRef,
    private readonly Logger: LoggerService,
    private router:Router,
    private readonly loggedInUserService: LoggedInUserService,
    private readonly notificationsService: NotificationsService
  ) {
    this.budgetForm = this.formBuilder.group({
      MoveBudget: ['', Validators.compose([
        Validators.pattern('^[1-9,]*[0-9]*$'),
        Validators.maxLength(20)
      ])
      ]
    });
    this.getScreenSize();
    this.clickedWorkOrder = this.router.getCurrentNavigation().extras.state;
  }

  setWorkOrderDetails(){
    if(this.clickedWorkOrder){     
      
      this.setCandidateContactDetail();
      this.setMoveDetails();
      this.setDepartureHomeDetails();
      this.setDestinationHomeDetails();
      this.setQuoteResponseDetails();
      this.setAgentInformationDetails();
      this.setKeyDatesDetails();
      this.setCandidateName();
    } else {
      this.router.navigate(['/work-orders'])
    }
  }

 

  /** To initialise the component */
  ngOnInit() {
    this.setWorkOrderDetails();
    this.candidateName = `${this.clickedWorkOrder.orderedBy.partyName.names[1]} ${this.clickedWorkOrder.orderedBy.partyName.names[0]}`;
    this.candidateInfo = {
      level: '',
      businessUnit: '',
      company: this.clickedWorkOrder.onBehalfOf.preferredName ? this.clickedWorkOrder.onBehalfOf.preferredName : this.clickedWorkOrder.onBehalfOf.entityName ? this.clickedWorkOrder.onBehalfOf.entityName : `-`,
      orderReference: this.clickedWorkOrder.orderReference
    };
  }

  setCandidateContactDetail(){
    this.candidateContactInfo = {
      candidateName: this.clickedWorkOrder.orderedBy.partyName.names[0] + "," + this.clickedWorkOrder.orderedBy.partyName.names[1],
      emailId: this.clickedWorkOrder.preferredEmailAddress,
      phoneNumber: Number(this.clickedWorkOrder.preferredPhoneNumber)
    };
  }


  setMoveDetails() {
    this.candidateMoveInfo = {
      departure: {
        fullAddress: `${this.clickedWorkOrder.departureCity.charAt(0).toUpperCase()}${this.clickedWorkOrder.departureCity.slice(1)},${this.clickedWorkOrder.departureState}`,
        streetAddress: this.clickedWorkOrder.departureAddress,
        city: this.clickedWorkOrder.departureCity,
        state: this.clickedWorkOrder.departureState,
        zipcode: this.clickedWorkOrder.departurePostalCode,
        country: this.clickedWorkOrder.departureCountry
      },
      destination: {
        fullAddress: `${this.clickedWorkOrder.destinationCity.charAt(0).toUpperCase()}${this.clickedWorkOrder.destinationCity.slice(1)},${this.clickedWorkOrder.departureState}`,
        streetAddress: this.clickedWorkOrder.destinationaddress,
        city: this.clickedWorkOrder.destinationCity,
        state: this.clickedWorkOrder.destinationState,
        zipcode: this.clickedWorkOrder.destinationPostalCode,
        country: "USA"
      },
      totalNumberOfPeople: this.clickedWorkOrder.totalNumPeople,
      estimatedMoveStartDate: this.clickedWorkOrder.estMoveStartDate,
      estimatedMoveEndDate: this.clickedWorkOrder.estMoveEndDate
    };
  }

  setDepartureHomeDetails() {
    this.candidateDepartureInfo = {
      departure: {
        fullAddress: `${this.clickedWorkOrder.departureCity} ${this.clickedWorkOrder.departureState}`,
        streetAddress: this.clickedWorkOrder.departureAddress,
        city: this.clickedWorkOrder.departureCity,
        state: this.clickedWorkOrder.departureState,
        zipcode: this.clickedWorkOrder.departurePostalCode,
        country: this.clickedWorkOrder.departureCountry
      },
      ownerStatus: this.clickedWorkOrder.ownRent, 
      housingType: this.clickedWorkOrder.propertyType,
      noOfRooms: this.clickedWorkOrder.numberRooms
    };
  }

  setDestinationHomeDetails(){
    this.candidateDestinationInfo = {
      departure: {
        fullAddress: `${this.clickedWorkOrder.destinationCity} ${this.clickedWorkOrder.destinationState}`,
        streetAddress: this.clickedWorkOrder.destinationaddress,
        city: this.clickedWorkOrder.destinationCity,
        state: this.clickedWorkOrder.destinationState,
        zipcode: this.clickedWorkOrder.destinationPostalCode,
        country: "USA"
      },
      comments: this.clickedWorkOrder.comments,
    };
  }
  
  setQuoteResponseDetails() {
    this.quoteResponseInfo = {
      orderRequestId: '',
      quoteRequestId: '',
      bidDate: new Date(),
      referenceNumber: this.clickedWorkOrder.referenceNumber,
      bidAmount: this.clickedWorkOrder.bidAmount,
      bidAmountCurrency: this.clickedWorkOrder.bidAmountCurrency,
      bidAmountStorage: this.clickedWorkOrder.bidAmountStorage,
      bidAmountStorageCurrency: this.clickedWorkOrder.bidAmountStorageCurrency,
      moveType: this.clickedWorkOrder.moveType,
      estimatedWeight: this.clickedWorkOrder.estimatedWeight, 
      estimatedWeightUnit: this.clickedWorkOrder.estimatedWeightUnit,
      estimatedDistance: this.clickedWorkOrder.estimatedDistance,
      estimatedDistanceUnit: this.clickedWorkOrder.estimatedDistanceUnit ,
      daysInStorage: this.clickedWorkOrder.daysInStorage
    }
  }

  setAgentInformationDetails() {
    this.agentInformationService.currentIsAgentInfo.subscribe(isAgentInfo=>this.isEmptyAgentInfo=isAgentInfo);
    this.agentInformationService.currentAgentInfo.subscribe(agentInfo => this.agentInfo=agentInfo);
    this.isEmptyAgentInfo = this.checkIsEmptyAgentInfo();
    this.agentInfo = {
      name:this.clickedWorkOrder.bookedWithContactName,
      email:this.clickedWorkOrder.bookedWithContactEmail,
      phone:this.clickedWorkOrder.bookedWithContactPhone	,
      orderAcknowledgementDate:this.clickedWorkOrder.orderAcknowledgementDate
    }
    this.agentInformationService.updateAgentInfo(this.agentInfo);
    this.agentInformationService.updateIsAgentInfo(this.isEmptyAgentInfo);
  }

  checkIsEmptyAgentInfo() {
    if((this.clickedWorkOrder.bookedWithContactName && this.clickedWorkOrder.bookedWithContactName.toString().trim().length > 0) || 
      (this.clickedWorkOrder.bookedWithContactEmail && this.clickedWorkOrder.bookedWithContactEmail.toString().trim().length > 0) ||
      (this.clickedWorkOrder.bookedWithContactPhone && this.clickedWorkOrder.bookedWithContactPhone.toString().trim().length > 0)){
        return false;
    }
    return true;
  }



  setKeyDatesDetails() {

    this.estimatedKeyDates = {
      EstimatedPackStartDate: this.clickedWorkOrder.estPackStartDate ? this.clickedWorkOrder.estPackStartDate : '',
      EstimatedPackEndDate: this.clickedWorkOrder.estPackEndDate ? this.clickedWorkOrder.estPackEndDate : '',
      EstimatedLoadStartDate: this.clickedWorkOrder.estLoadStartDate ? this.clickedWorkOrder.estLoadStartDate : '',
      EstimatedLoadEndDate: this.clickedWorkOrder.estLoadEndDate ? this.clickedWorkOrder.estLoadEndDate : '',
      EstimatedStorageInStartDate: this.clickedWorkOrder.estStorageInStartDate ? this.clickedWorkOrder.estStorageInStartDate : '',
      EstimatedStorageInEndDate: this.clickedWorkOrder.estStorageInEndDate ? this.clickedWorkOrder.estStorageInEndDate : '',
      EstimatedStorageOutStartDate: this.clickedWorkOrder.estStorageOutStartDate ? this.clickedWorkOrder.estStorageOutStartDate : '',
      EstimatedStorageOutEndDate: this.clickedWorkOrder.estStorageOutEndDate ? this.clickedWorkOrder.estStorageOutEndDate : '',
      EstimatedDeliveryDate: this.clickedWorkOrder.estDeliveryStartDate ? this.clickedWorkOrder.estDeliveryStartDate : '',
      EstimatedDeliveryEndDate: this.clickedWorkOrder.estDeliveryEndDate ? this.clickedWorkOrder.estDeliveryEndDate : ''
    }
    this.actualKeyDates = {
      ActualPackDate: this.clickedWorkOrder.actualPackDate ? this.clickedWorkOrder.actualPackDate : '',
      ActualLoadDate: this.clickedWorkOrder.actualLoadDate ? this.clickedWorkOrder.actualLoadDate : '',
      StorageInDate: this.clickedWorkOrder.actualStorageInDate ? this.clickedWorkOrder.actualStorageInDate : '',
      StorageOutDate: this.clickedWorkOrder.actualStorageOutDate ? this.clickedWorkOrder.actualStorageOutDate : '',
      ActualDeliveryDate: this.clickedWorkOrder.actualDeliveryDate ? this.clickedWorkOrder.actualDeliveryDate : ''
    }

    this.isKeyDateEmpty = this.checkIfKeyDatesEmpty(this.estimatedKeyDates, this.actualKeyDates);

  }

  checkIfKeyDatesEmpty(est, act) {

    if(est.EstimatedPackStartDate || est.EstimatedPackEndDate || est.EstimatedLoadStartDate || est.EstimatedLoadEndDate || est.EstimatedStorageInStartDate ||
      est.EstimatedStorageInEndDate || est.EstimatedStorageOutStartDate || est.EstimatedStorageOutEndDate || est.EstimatedDeliveryDate || est.EstimatedDeliveryEndDate ||
      act.ActualPackDate || act.ActualLoadDate || act.StorageInDate || act.StorageOutDate || act.ActualDeliveryDate) {
      return false;
    }
    return true;
  }

  getWorkOrderDetailAttributeValue(attributeArray: Array<any>, attributeName: string, isEnumerated: boolean = false){
    if(attributeArray.length > 0) {
      let property = attributeArray.find(attribute => attribute.name === attributeName);
      if (isEnumerated){
        let propertyValue = property.enumeratedValues.find(enumeratedValue => enumeratedValue.isSelected === true);
        return propertyValue.value;
      }
      return property.attributeValue;
    } else {
      return null;
    }
  }

  editKeys(): void {
    this.editKeyRef = this.dialog.open(EditKeysComponent, {
      data: {estimatedKeyDates: this.estimatedKeyDates, actualKeyDates: this.actualKeyDates, orderAcknowledgementDate: this.clickedWorkOrder.orderAcknowledgementDate, referenceNumber: this.clickedWorkOrder.referenceNumber},
      panelClass: ['dialogMainContainer', 'authorize-dialog-container','edit-key-dates'],
      autoFocus: false,
      restoreFocus: false,
      disableClose: true
    });
    this.editKeyRef.afterClosed().subscribe(
      result => {
        if(result) {         
          this.estimatedKeyDates = {
            EstimatedPackStartDate : result.packDates.estimatedStartDate,
            EstimatedPackEndDate: result.packDates.estimatedEndDate,
            EstimatedLoadStartDate: result.loadDates.estimatedStartDate,
            EstimatedLoadEndDate: result.loadDates.estimatedEndDate,
            EstimatedStorageInStartDate: result.StorageInDates.estimatedStartDate,
            EstimatedStorageInEndDate: result.StorageInDates.estimatedEndDate,
            EstimatedStorageOutStartDate: result.StorageOutDates.estimatedStartDate,
            EstimatedStorageOutEndDate: result.StorageOutDates.estimatedEndDate,
            EstimatedDeliveryDate: result.deliveryDates.estimatedStartDate,
            EstimatedDeliveryEndDate: result.deliveryDates.estimatedEndDate
          }
          this.actualKeyDates = {
            ActualPackDate : result.packDates.actualDate,
            ActualLoadDate: result.loadDates.actualDate,
            StorageInDate: result.StorageInDates.actualDate,
            StorageOutDate: result.StorageOutDates.actualDate,
            ActualDeliveryDate: result.deliveryDates.actualDate,
          }

          this.isKeyDateEmpty = this.checkIfKeyDatesEmpty(this.estimatedKeyDates, this.actualKeyDates);
        }
    });
  }

  /** Get screen width */
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
  }

  /** sets Candidate Name */
  setCandidateName() {
    this.candidateName =
      `${this.candidateContactInfo.candidateName.split(',')[1]} ${this.candidateContactInfo.candidateName.split(',')[0]}`;
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

  /** Open the tooltip dialog */
  openTooltipDialog(key: string) {
    const elementDom = this.myElement.nativeElement.querySelector(
      'mat-form-field#moveBudgetField'
    );
    const target = this.getPositionByEvents(elementDom);
    const element = new ElementRef(target);
    const positionStrategy = this.placeByPositionStrategy(element);
    const thresholdScroll: CloseScrollStrategyConfig = {
      threshold: 50
    };
    const overlayConfig = new OverlayConfig({
      width: 250,
      panelClass: 'overlay-tooltip-pane',
      hasBackdrop: true,
      backdropClass: 'mat-backdrop-transparent',
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close(thresholdScroll),
      disposeOnNavigation: true
    });
    this.overlayRef = this.overlay.create(overlayConfig);
    const containerPortal = new ComponentPortal(
      OverlayTooltipComponent,
      null,
      this.positionService.createInjector({
        keyString: key,
        clientX: target.getBoundingClientRect().left,
        clientY: target.getBoundingClientRect().top,
        screenWidth: this.screenWidth,
        overlayRef: this.overlayRef
      })
    );
    this.overlayRef.attach(containerPortal);
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.dispose();
    });
  }

  /** get the position of the target */
  getPositionByEvents(elem) {
    const rect = elem.getBoundingClientRect();
    return {
      getBoundingClientRect: (): ClientRect => ({
        bottom: rect.top,
        height: rect.height,
        left: rect.left + (rect.right - rect.left) / 2,
        right: rect.right,
        top: rect.top,
        width: rect.width
      })
    };
  }

  /** place the pop up by position strategy */
  placeByPositionStrategy(element: ElementRef) {
    return this.overlay
      .position()
      .flexibleConnectedTo(element)
      .withFlexibleDimensions(false)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'bottom'
        },
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        }
      ]);
  }

  

  /**
   * destroys the object
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
