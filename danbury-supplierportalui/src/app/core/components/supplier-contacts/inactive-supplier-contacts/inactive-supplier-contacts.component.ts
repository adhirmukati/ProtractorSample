import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationsService } from '../../../services/notifications.service';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inactive-supplier-contacts',
  templateUrl: './inactive-supplier-contacts.component.html',
  styleUrls: ['./inactive-supplier-contacts.component.scss']
})
export class InactiveSupplierContactsComponent implements OnInit, OnDestroy {
  errorMessage = 'We are unable to process your request at this time. Please try again later.';
  editCandidateForm: FormGroup;
  matExpansionHeaderHeight:string;
  /** Subscription prop for unsubscribing services */
  private readonly subscription: Subscription = new Subscription();
  /**
   * base constructor
   * @param data data received from calling component
   * @param dialogRef - property for mat dialog reference
   * @param notificationsService - snackbar service
   */

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<InactiveSupplierContactsComponent>,
    private readonly notificationsService: NotificationsService,
    private router: Router
  ) { }

  /** function to be executed on init */
  ngOnInit() {
  }

  /**
   * Closing the dialog box
   */
  close(): void {
    event.preventDefault();
    event.stopPropagation();
    this.dialogRef.close(true);
  }

  inactivateSupplierContacts() {
  }

  /**
   * destroys the object
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
