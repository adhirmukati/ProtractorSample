import { Component, Inject, Optional, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from'@angular/material/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EstimatedKeyDates, ActualKeyDates } from '../../models/key-dates.model';
import { WorkOrderService } from '../../services/work-order.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationsService } from '../../services/notifications.service';
import { UpdateKeys } from '../../models/updateKeys.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/material/mat-datepicker-format';

import { dateRangeValidator,deliveryPriortoLoadValidator,deliveryPriortoPackValidator, storageDatesValidator, deliverPriortoStorageOutValidator } from '../../validators/date.validator';

@Component({
  selector: 'app-edit-keys',
  templateUrl: './edit-keys.component.html',
  styleUrls: ['./edit-keys.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class EditKeysComponent implements OnInit {

  keyDatesForm: FormGroup;
  estimatedKeyDates : EstimatedKeyDates;
  actualKeyDates : ActualKeyDates;

  errorMessage = 'We are unable to process your request at this time. Please try again later.';

  requestBody: UpdateKeys[] = [];

  validationErrorMessages = {
    "startNoEnd": "End Date must be entered",
    "endNoStart": "Start Date must be entered",
    "endDateInvalid": "End Date cannot be prior to start date",
    "actualLoadDateInvalid": "Load Date cannot be prior to Pack Date",
    "actualStorageOutDateInvalid": "Storage Out date needs to be greater than Storage End Date",
    "actualDeliveryAgainstLoadInvalid": "Delivery date cannot be prior to Load date",
    "actualtDeliveryAgainstStorageOutInvalid": "Delivery date cannot be prior to Storage Out date",
    "actualLoadAgainstPackInvalid": "Load Date cannot be prior to Pack Date"
  }
  constructor(
    public dialogRef: MatDialogRef<EditKeysComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly workOrderService: WorkOrderService,
    private readonly spinner: NgxSpinnerService,
    private readonly notificationsService: NotificationsService,
    private readonly formBuilder: FormBuilder) {
    
    if(data.estimatedKeyDates != undefined || data.actualKeyDates != undefined) {
      this.estimatedKeyDates = data.estimatedKeyDates;
      this.actualKeyDates = data.actualKeyDates;
    } 
    else {
      this.dialogRef.close(true);
      this.notificationsService.flashNotification(
        'error',
        this.errorMessage,
        true,
        'dismiss'
      );
    }
  }

  ngOnInit() {
    this.keyDatesForm = this.formBuilder.group({
      packDateGroup:this.formBuilder.group({
        start: [this.estimatedKeyDates.EstimatedPackStartDate ? this.estimatedKeyDates.EstimatedPackStartDate : ''],
        end: [this.estimatedKeyDates.EstimatedPackEndDate ? this.estimatedKeyDates.EstimatedPackEndDate : ''],
        
      }, { validator: [dateRangeValidator] }),
      loadDateGroup: this.formBuilder.group({
        start: [this.estimatedKeyDates.EstimatedLoadStartDate ? this.estimatedKeyDates.EstimatedLoadStartDate : ''],
        end: [this.estimatedKeyDates.EstimatedLoadEndDate ? this.estimatedKeyDates.EstimatedLoadEndDate : ''],
        
      }, { validator: [dateRangeValidator] }),
      storeInDateGroup:this.formBuilder.group({
        start: [this.estimatedKeyDates.EstimatedStorageInStartDate ? this.estimatedKeyDates.EstimatedStorageInStartDate : ''],
        end: [this.estimatedKeyDates.EstimatedStorageInEndDate ? this.estimatedKeyDates.EstimatedStorageInEndDate : ''],
        
      }, { validator: [dateRangeValidator] }),
      storeOutDateGroup: this.formBuilder.group({
        start:[this.estimatedKeyDates.EstimatedStorageOutStartDate? this.estimatedKeyDates.EstimatedStorageOutStartDate:''],
        end: [this.estimatedKeyDates.EstimatedStorageOutEndDate ? this.estimatedKeyDates.EstimatedStorageOutEndDate : ''],
        
      }, { validator: [dateRangeValidator] }),
      deliveryDateGroup:this.formBuilder.group({
        start: [this.estimatedKeyDates.EstimatedDeliveryDate ? this.estimatedKeyDates.EstimatedDeliveryDate : ''],
        end: [this.estimatedKeyDates.EstimatedDeliveryEndDate ? this.estimatedKeyDates.EstimatedDeliveryEndDate : ''],
        
      }, { validator: [dateRangeValidator] }),
      actualsGrp:this.formBuilder.group({
        pack:[this.actualKeyDates.ActualPackDate ? this.actualKeyDates.ActualPackDate : ''],
        load:[this.actualKeyDates.ActualLoadDate ? this.actualKeyDates.ActualLoadDate : ''],
        delivery:[this.actualKeyDates.ActualDeliveryDate ? this.actualKeyDates.ActualDeliveryDate : ''],
        storageIn:[this.actualKeyDates.StorageInDate ? this.actualKeyDates.StorageInDate : ''],
        storageOut:[this.actualKeyDates.StorageOutDate ? this.actualKeyDates.StorageOutDate : '']
      }, { validator: [deliveryPriortoLoadValidator,deliveryPriortoPackValidator, storageDatesValidator, deliverPriortoStorageOutValidator]})
      
    })
  }

  onSave() {

    event.preventDefault();
    event.stopPropagation();

    this.spinner.show();

    this.requestBody = [
      {  
        referenceNumber: this.data.referenceNumber,
        orderAcknowledgementDate: this.data.orderAcknowledgementDate,
        packDates: {
          estimatedStartDate: this.keyDatesForm.get('packDateGroup.start').value ? new Date(this.keyDatesForm.get('packDateGroup.start').value).toISOString() : null,
          estimatedEndDate: this.keyDatesForm.get('packDateGroup.end').value ? new Date(this.keyDatesForm.get('packDateGroup.end').value).toISOString() : null,
          actualDate: this.keyDatesForm.get('actualsGrp.pack').value ? new Date(this.keyDatesForm.get('actualsGrp.pack').value).toISOString() : null 
        },
        loadDates: {
          estimatedStartDate: this.keyDatesForm.get('loadDateGroup.start').value ? new Date(this.keyDatesForm.get('loadDateGroup.start').value).toISOString() : null,
          estimatedEndDate: this.keyDatesForm.get('loadDateGroup.end').value ? new Date(this.keyDatesForm.get('loadDateGroup.end').value).toISOString() : null,
          actualDate: this.keyDatesForm.get('actualsGrp.load').value ? new Date(this.keyDatesForm.get('actualsGrp.load').value).toISOString() : null
        },
        StorageInDates: {
          estimatedStartDate: this.keyDatesForm.get('storeInDateGroup.start').value ? new Date(this.keyDatesForm.get('storeInDateGroup.start').value).toISOString() : null,
          estimatedEndDate: this.keyDatesForm.get('storeInDateGroup.end').value ? new Date(this.keyDatesForm.get('storeInDateGroup.end').value).toISOString() : null,
          actualDate: this.keyDatesForm.get('actualsGrp.storageIn').value ? new Date(this.keyDatesForm.get('actualsGrp.storageIn').value).toISOString() : null
        },
        StorageOutDates: {
          estimatedStartDate: this.keyDatesForm.get('storeOutDateGroup.start').value ? new Date(this.keyDatesForm.get('storeOutDateGroup.start').value).toISOString() : null,
          estimatedEndDate: this.keyDatesForm.get('storeOutDateGroup.end').value ? new Date(this.keyDatesForm.get('storeOutDateGroup.end').value).toISOString() : null,
          actualDate: this.keyDatesForm.get('actualsGrp.storageOut').value ? new Date(this.keyDatesForm.get('actualsGrp.storageOut').value).toISOString() : null
        },
        deliveryDates: {
          estimatedStartDate: this.keyDatesForm.get('deliveryDateGroup.start').value ? new Date(this.keyDatesForm.get('deliveryDateGroup.start').value).toISOString() : null,
          estimatedEndDate: this.keyDatesForm.get('deliveryDateGroup.end').value ? new Date(this.keyDatesForm.get('deliveryDateGroup.end').value).toISOString() : null,
          actualDate: this.keyDatesForm.get('actualsGrp.delivery').value ? new Date(this.keyDatesForm.get('actualsGrp.delivery').value).toISOString() : null
        }
      }
    ];



    this.workOrderService.updateKeyDates(this.requestBody).subscribe(response => {
      this.keyDateResponse(response);

    },
      (err) => {
        this.spinner.hide();

        this.notificationsService.flashNotification(
          'error',
          err.message,
          true,
          'dismiss'
        );

      });

  }

  keyDateResponse(response) {
    this.spinner.hide();
    if (response !== null) {
      this.flashAndCloseDialog(response[0].message);
    } else {
      this.dialogRef.close(true);
      this.notificationsService.flashNotification(
        'error',
        this.errorMessage,
        true,
        'dismiss'
      );
    }
  }

  flashAndCloseDialog(message: string) {
    this.dialogRef.close(this.requestBody[0]);
    this.notificationsService.flashNotification(
      'success',
      "Key dates updated successfully!",
      true,
      'dismiss'
    );
  }
  
  close(): void {
    this.dialogRef.close();
  }

  enableSaveKeyDatesBtn(){
    let actualsHaveValue = false
    let estimatedDatePairExists = false
    let actualsFormProp = Object.keys(this.keyDatesForm.get('actualsGrp').value);
    let estimatedDatesFormGroupNames = ["packDateGroup","loadDateGroup","storeInDateGroup","storeOutDateGroup","deliveryDateGroup"];
    estimatedDatesFormGroupNames.forEach(prop =>{
      let formGroup = this.keyDatesForm.controls[prop].value;
      if(formGroup.start && formGroup.end){
        estimatedDatePairExists = true;
      }
    })
    actualsFormProp.forEach(prop =>{
      if(this.keyDatesForm.get('actualsGrp').value[prop]){
        actualsHaveValue = true;
      }
    })

    return !((estimatedDatePairExists || actualsHaveValue) && this.keyDatesForm.valid )
  }

}
