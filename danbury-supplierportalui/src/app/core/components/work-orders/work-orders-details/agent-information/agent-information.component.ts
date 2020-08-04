import { Component, OnInit, ViewEncapsulation, Inject, EventEmitter, Output, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateAdapter, MAT_DATE_FORMATS, MatSnackBar } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { apiErrorMessage } from 'src/app/core/models/constants';
import {AgentInformation} from '../../../../models/agent-information.model';
import {AgentInformationService} from '../../../../services/agent-information.service';
import { NotificationsService } from '../../../../../core/services/notifications.service';
import { fixDialogFocus } from '../../../quotes/quote-response/quote-response.component';


@Component({
  selector:'app-agent-information',
  templateUrl: './agent-information.component.html',
  styleUrls: ['./agent-information.component.scss']
})

export class AgentInformationComponent implements OnInit{

  
  /** property to store agent information form group details */ 
  agentInformationForm: FormGroup;
  /**property to store Agent Information Details */
  agentInformation: AgentInformation;
  matExpansionHeaderHeight:string;
  arrAgentInformation: Array<AgentInformation>=[];
  isEmptyAgentInfo: boolean = true;
  /** Subscription prop for unsubscribing services */
  private readonly subscription: Subscription = new Subscription();
  /**
   * base constructor
   * @param data data received from calling component
   * @param dialogRef - property for mat dialog reference
   * @param agentInformationService - agent information service
   * @param notificationsService - snackbar service
   * @param snackBar to display snack bar
   * @param spinner - ngx spinner service
   */
 
  snackBar: any; 

  constructor(
    
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AgentInformationComponent>,
    private agentInformationService: AgentInformationService,
    private readonly spinner: NgxSpinnerService,
    private notificationService:NotificationsService,
    private readonly formBuilder : FormBuilder
  ) { }

  /** function to be executed on init */
  ngOnInit() {   
    fixDialogFocus(this.dialogRef);
    this.isEmptyAgentInfo = this.data.isEmptyAgentInfo;    
    this.agentInformationForm = this.formBuilder.group({    
      fullName: [this.data.agentInfo ? this.data.agentInfo.name : "", [Validators.required,Validators.minLength(2),Validators.pattern('^[a-z A-Z0-9-`]*$')]],     
      emailAddress: [this.data.agentInfo ? this.data.agentInfo.email : "", [Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+[a-zA-Z0-9-]*\\.[a-zA-Z]{2,3}$')]],    
    phoneNumber: [this.data.agentInfo ? this.data.agentInfo.phone : "", [Validators.required,Validators.minLength(10)]],                  
    });
    
  
  }
  

  submitAgentDetails()
  {
    
   if(this.agentInformationForm.valid)
   {
    this.spinner.show();    
    this.agentInformation = {
    referenceNumber:this.data.referenceNumber,
    orderAcknowledgementDate: new Date(),
    bookedWithContactName: this.agentInformationForm.value.fullName,
    bookedWithContactEmail: this.agentInformationForm.value.emailAddress,
    bookedWithContactPhone: this.agentInformationForm.value.phoneNumber
    };
    if((!this.isEmptyAgentInfo) && (this.data.agentInfo.orderAcknowledgementDate))
    {
      this.agentInformation.orderAcknowledgementDate=this.data.agentInfo.orderAcknowledgementDate;
    }   
    
    this.arrAgentInformation.push(this.agentInformation);
    
    this.dialogRef.close(this.agentInformation);
    this.spinner.hide();
  }
  }
  /**
   * Closing the dialog box
   */
  close(): void {
    this.dialogRef.close();
  }
 

}