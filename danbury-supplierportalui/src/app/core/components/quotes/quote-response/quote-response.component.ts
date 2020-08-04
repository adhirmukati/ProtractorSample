import { Component, OnInit, ViewEncapsulation, Inject, EventEmitter, Output, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationsService } from '../../../../core/services/notifications.service';
import { DateAdapter, MAT_DATE_FORMATS, MatSnackBar } from '@angular/material';
import { DateAdapterService } from '../../../../core/services/date-adapter.service';
import { APP_DATE_FORMATS, apiErrorMessage } from '../../../../core/models/constants';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { LoggerService } from '../../../../core/services/logger.service';
import { LoggedInUserService } from '../../../../core/services/loggedin-user-service';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { QuoteRequestService } from 'src/app/core/services/quote-request.service';
import { quoteResponse } from '../../../models/quote-response.model';
import { validateBasis } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { ValidateAmount } from 'src/app/core/validators/amount.validator';
export const fixDialogFocus = (dialogRef: MatDialogRef<any>) => 
{
    if (event && event.currentTarget && (<any> event.currentTarget).blur)
    {
        const initiator: any = event.currentTarget;

        dialogRef.afterClosed().subscribe(() => 
        {
            setTimeout(() => {
                try { initiator.blur(); } catch {}    
            }, 0);
        });
    }
}
@Component({
  selector: 'app-quote-response',
  templateUrl: './quote-response.component.html',
  styleUrls: ['./quote-response.component.scss']
})
export class QuoteResponseComponent implements OnInit, OnDestroy {

  quoteResponseData: quoteResponse = {
    orderRequestId: '',
    quoteRequestId: '',
    referenceNumber: '',
    bidDate: new Date (''),
    bidAmount: '',
    bidAmountCurrency: '',
    bidAmountStorage: '',
    bidAmountStorageCurrency: "",
    estimatedWeight: 0,
    estimatedWeightUnit: "",
    estimatedDistance: 0,
    estimatedDistanceUnit: "",
    moveType: ""
  }; 

  days = 30;
  errorMessage = 'We are unable to process your request at this time. Please try again later.';
  MoveType: any = ['Micro','Regular'];
  selected = true;
  /**flag to check the transferee authorization */
  isTransfereeAuthorized: boolean;
  editCandidateForm: FormGroup;
  /**property to store Job Start Date */
  jobStartOn: Date;
  /**property to store invoice details */
  invoiceDetails: any;
  /**property for min Date */
  minStartDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate());
  /** Stores the client contact ID */
  clientContactId: string;
  matExpansionHeaderHeight:string='0px';  
  matCollapseHeaderHeight:string='40px';  
  isStorageOpen:boolean=false;
  /** Subscription prop for unsubscribing services */
  private readonly subscription: Subscription = new Subscription();

  /**
   * It Emits the data to the parent component
   */
  @Output() submitQuoteResponses = new EventEmitter<quoteResponse>();
  /**
   * base constructor
   * @param data data received from calling component
   * @param dialogRef - property for mat dialog reference
   * @param notificationsService - snackbar service
   * @param snackBar to display snack bar
   * @param spinner - ngx spinner service
   */

  /**variable to store electronicPaymentInstructions */
  electronicPaymentInstructions: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<QuoteResponseComponent>,
    private readonly notificationsService: NotificationsService,
    private readonly formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar,
    private readonly spinner: NgxSpinnerService,
    private readonly quoteRequestService: QuoteRequestService,
    private readonly Logger: LoggerService,
    private readonly loggedInUserService: LoggedInUserService,
    private router: Router
  ) { }

  /** function to be executed on init */
  ngOnInit() {
    fixDialogFocus(this.dialogRef);
    this.editCandidateForm = this.formBuilder.group({
      // orderRequestId: '5ddb8420ee2abfdd678a5762',
      // quoteRequestId: '5ddc97713fb8021676141a5a',
      reference: ['',Validators.required],
     // bidDate: '2019-11-15',
      bidAmount: ['',[Validators.required,Validators.min(1),ValidateAmount]],    
      bidAmountStorage: [''],    
      estimatedWeight: ['',[Validators.required,Validators.min(1),ValidateAmount]],    
      estimatedDistance: ['',[Validators.required,Validators.min(1),ValidateAmount]],    
      moveType: ['Regular'] ,
      bidStorageDays:[{value:'',disabled :true}] 
    });

    
    let storageCtrl =this.editCandidateForm.get("bidAmountStorage");
    storageCtrl.valueChanges.subscribe((data:string)=>{
      let storageDaysCtrl =this.editCandidateForm.get("bidStorageDays");
      if(data.length == 0)
      {
        storageDaysCtrl.disable();
        this.setValidatorForStorageDays();
        
      }
      else
      {
        if(Number(storageCtrl.value)>0){
          storageDaysCtrl.enable();
          this.setValidatorForStorageDays(true);
        }
        else{
          storageDaysCtrl.disable();
          this.setValidatorForStorageDays();
        }    
      }
      
    });
  }

  
  /**
   * Closing the dialog box
   */
  close(): void {
    event.preventDefault();
    event.stopPropagation();
    this.dialogRef.close(true);
  }
  
  /** function to be called if Authorize Tranfer button is clicked */
  submitQuoteResponse() {
    event.preventDefault();
    event.stopPropagation();

    // this.spinner.show();

    this.quoteResponseData = {
      orderRequestId: String(this.data.orderRequestId),
      quoteRequestId: String(this.data.quoteRequestId),
      referenceNumber: String(this.editCandidateForm.value.reference),
      bidDate: new Date(),
      bidAmount: String(this.editCandidateForm.value.bidAmount),
      bidAmountCurrency: 'USD',      
      estimatedWeight: Number(this.editCandidateForm.value.estimatedWeight),
      estimatedWeightUnit: "lbs",
      estimatedDistance: Number(this.editCandidateForm.value.estimatedDistance),
      estimatedDistanceUnit: "mi",
      moveType: (this.editCandidateForm.value.moveType).toLowerCase()
    };
    if(Number(this.editCandidateForm.value.bidStorageDays)>0)
    {
      this.quoteResponseData.daysInStorage = Number(this.editCandidateForm.value.bidStorageDays);
    }
    if(Number(this.editCandidateForm.value.bidAmountStorage)>0){
      this.quoteResponseData.bidAmountStorage =String(this.editCandidateForm.value.bidAmountStorage);
      this.quoteResponseData.bidAmountStorageCurrency= "USD";
    }

    
    this.dialogRef.close(true);
    this.submitQuoteResponses.emit( this.quoteResponseData);
    // this.quoteRequestService.sendQuoteResponse(this.quoteResponseData).subscribe(response => {
    //   this.quoteResponse(response);
    // });
    
  }

  quoteResponse(response) {
    this.spinner.hide();
    if (response !== null) {
      this.flashAndCloseDialog(response.message);
    } else {
      this.dialogRef.close(true);
      this.notificationsService.flashNotification(
        'error',
        this.errorMessage,
        true,
        'dismiss'
      );
      this.router.navigate(['/quotes-request']);
    }
  }

  openStorage(){
    this.setValidatorForStorageCost(true);
    this.toggleStoragePanel(); 
  }
  toggleStoragePanel(){
    this.isStorageOpen = !this.isStorageOpen;
  }
  
  setValidatorForStorageDays(isApply:boolean=false){
    let storageDaysCtrl = this.editCandidateForm.get("bidStorageDays");
    if(isApply){
      storageDaysCtrl.setValidators([Validators.required,Validators.min(1),ValidateAmount]);
    }else{
      storageDaysCtrl.clearValidators(); 
      storageDaysCtrl.markAsUntouched();   
    }       
    storageDaysCtrl.updateValueAndValidity();
  }
  setValidatorForStorageCost(isApply:boolean=false){
    let storageAmountCtrl = this.editCandidateForm.get("bidAmountStorage");
    if(isApply){
      storageAmountCtrl.setValidators([Validators.required,Validators.min(1),ValidateAmount]);
    }else{
      storageAmountCtrl.clearValidators();   
      storageAmountCtrl.markAsUntouched(); 
    }       
    storageAmountCtrl.updateValueAndValidity();
  }

  
  closeStorage(){
    this.setValidatorForStorageCost();
    this.setValidatorForStorageDays();
    let storageAmountCtrl = this.editCandidateForm.get("bidAmountStorage");
    storageAmountCtrl.setValue("");        
    let storageDaysCtrl = this.editCandidateForm.get("bidStorageDays");    
    storageDaysCtrl.setValue("");
  }
  /**
   * function to flash message and close dialog
   * @param response string
   */
  flashAndCloseDialog(message: string) {
    this.dialogRef.close(true);
    this.notificationsService.flashNotification(
      'success',
      "Quote response submitted successfully!",
      true,
      'dismiss'
    );
    this.router.navigate(['/quotes-request']);
  }
  /**
   * destroys the object
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
