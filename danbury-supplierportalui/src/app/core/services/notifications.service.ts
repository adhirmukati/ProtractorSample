import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';
// import { DuplicateCandidateComponent } from '../components/quotes/candidate-profile/duplicate-candidate/duplicate-candidate.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  //setAutoHide: boolean = true;
  setAutoHide = true;
  autoHide = 3000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  addExtraClass = false;

  constructor(public snackBar: MatSnackBar) { }

  flashNotification(...params) {
    const notificationType = params[0];
    const message = params[1];


    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    config.panelClass = notificationType;
    
    this.snackBar.open(message, undefined, config);

  }

  confirmNotification(message) {
    // this.snackBar.openFromComponent(DuplicateCandidateComponent, {
    //   horizontalPosition: 'center',
    //   verticalPosition: 'bottom',
    //   data: 'Invitation Sent',
    //   duration: (message === 'Email') ? 5000 : 0
    // });
  }
}
