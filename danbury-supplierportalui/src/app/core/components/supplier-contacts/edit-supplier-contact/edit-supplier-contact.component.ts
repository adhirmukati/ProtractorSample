import * as querystring from 'querystring';
import { apiErrorMessage, skipRecordCount } from '../../../models/constants';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Selection } from '../../../models/selection.model';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {Input,
  Component,
  ChangeDetectorRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  Output,
  EventEmitter,
  SimpleChanges,
  OnDestroy,
  Inject
} from '@angular/core';

import { MatSort, MatPaginator, MatSnackBar, Sort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { NotificationsService } from '../../../services/notifications.service';
import { Subscription } from 'rxjs';
import { Candidate } from '../../../models/candidate';
import { LoggerService } from '../../../services/logger.service';
import { QuoteRequestService } from '../../../services/quote-request.service';
import { LoggedInUserService } from 'src/app/core/services/loggedin-user-service';
import { quoteResponse } from 'src/app/core/models/quote-response.model';

@Component({
  selector: 'app-edit-supplier-contact',
  templateUrl: './edit-supplier-contact.component.html',
  styleUrls: ['./edit-supplier-contact.component.scss']
})
export class EditSupplierContactComponent implements OnInit {

  isEmptySupplierInfo: boolean = true;
  days = 30;
  errorMessage = 'We are unable to process your request at this time. Please try again later.';
  Supplier: any = ['Atlas Van Lines'];
  selected = true;
  editsupplierContact: FormGroup;
  /**property to store Job Start Date */
  jobStartOn: Date;
  /**property to store invoice details */
  invoiceDetails: any;
  /** Stores the client contact ID */
  clientContactId: string;
  matExpansionHeaderHeight:string;
  /** Subscription prop for unsubscribing services */
  private readonly subscription: Subscription = new Subscription();
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
    public dialogRef: MatDialogRef<EditSupplierContactComponent>,
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
    this.isEmptySupplierInfo = this.data.isEmptySupplierInfo;
    let nameArr = [];
    if(this.data.supplierContactDetails){
      nameArr = this.data.supplierContactDetails.fullName.split(',');
    }
    
    this.editsupplierContact = this.formBuilder.group({
      firstname: [nameArr.length > 0 ? nameArr[0] : "",Validators.required],
      lastname: [nameArr.length > 0 ? nameArr[1] : "",Validators.required],  
      emailAddress: [this.data.supplierContactDetails ? this.data.supplierContactDetails.email : "", [Validators.required,Validators.email]],    
      phoneNumber: [this.data.supplierContactDetails ? '12345' : "", Validators.required],      
      supplier: ['']   
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
  addOrUpdateSupplierContact() {
    event.preventDefault();
    event.stopPropagation();
    let res: any;
    this.updateSupplierContact(res);
  }

  updateSupplierContact(response) {
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
