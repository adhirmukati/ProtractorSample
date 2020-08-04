import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AgentInformationComponent } from '../work-orders/work-orders-details/agent-information/agent-information.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AgentInformation } from '../../models/agent-information.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { AgentInformationService } from '../../services/agent-information.service';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-candidate-agent-info',
  templateUrl: './candidate-agent-info.component.html',
  styleUrls: ['./candidate-agent-info.component.scss']
})
export class CandidateAgentInfoComponent implements OnInit, OnChanges {
  @Input() agentInfo: any;
  @Input() isEmptyAgentInfo:boolean;
  @Input() referenceNumber:any;
  
  dialogRef: MatDialogRef<AgentInformationComponent>;
  arrAgentInformation: Array<AgentInformation>=[];
  agentPhoneNumber:string;
  constructor(private readonly spinner: NgxSpinnerService,    
    private agentInformationService: AgentInformationService,
    private notificationService:NotificationsService,
    public dialog: MatDialog) { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.setAgentPhoneNumber();
  }
  setAgentPhoneNumber(){
    this.agentPhoneNumber=`(${this.agentInfo.phone.substring(0, 3)}) ${this.agentInfo.phone.substring(
      3,
      6
    )}-${this.agentInfo.phone.substring(6, 10)}`;
  }
  
  openAgentDialog(): void {
    this.dialogRef = this.dialog.open(AgentInformationComponent, {
     
      panelClass: ['dialogMainContainer', 'authorize-dialog-container'],
      data: { agentInfo: this.agentInfo , referenceNumber: this.referenceNumber ?this.referenceNumber:0, isEmptyAgentInfo: this.isEmptyAgentInfo }
    });
    this.dialogRef.afterClosed().subscribe(
      result => {
       if(result)
        {
             
          
          this.SaveorUpdateAgentDetails(result);
        }
      }
    )   
  }

  SaveorUpdateAgentDetails(agentdata){
    this.spinner.show();
    this.arrAgentInformation.push(agentdata);
    this.agentInformationService.updateAgentInformation(this.arrAgentInformation).subscribe(response => {
      
          if(response[0].message.messsage == "Move Response Updated Successfully")
          {
            this.spinner.hide();
                 this.notificationService.flashNotification(
                   'success',
                   'Agent Information has been updated succesfully'
                 );
                 this.isEmptyAgentInfo = false;  
                 this.agentInfo = {
                  name:agentdata.bookedWithContactName,
                  email:agentdata.bookedWithContactEmail,
                  phone:agentdata.bookedWithContactPhone,
                }
                this.setAgentPhoneNumber();
                this.agentInformationService.updateAgentInfo(this.agentInfo);
                this.agentInformationService.updateIsAgentInfo(this.isEmptyAgentInfo);
       }
       else {
               this.spinner.hide();
               this.notificationService.flashNotification(
                 'error',
                 response.error  );
            }
     });  
  }
}
