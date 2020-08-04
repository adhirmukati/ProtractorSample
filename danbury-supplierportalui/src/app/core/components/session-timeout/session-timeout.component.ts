import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';
import {LoggerService} from '../../../core/services/logger.service';
import { LoggedInUserService } from '../../../core/services/loggedin-user-service';

@Component({
  selector: 'app-session-timeout',
  templateUrl: './session-timeout.component.html',
  styleUrls: ['./session-timeout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SessionTimeoutComponent implements OnInit {


  /**
   * Base constructor
   * @param _snackRef MatSnackBarRef
   */

  constructor(
      private readonly _snackRef: MatSnackBarRef<SessionTimeoutComponent>,
      @Inject(MAT_SNACK_BAR_DATA) public data: any,
      private readonly Logger: LoggerService,
      private readonly loggedInUserService: LoggedInUserService
) { }

  ngOnInit() {
    // this.loggedInUserService.getLoggedInUserDetails()
    // .subscribe(response => {
    //   const userId: any = response.name.replace(/ .*/, '');
    //   this.Logger.activityAudit('ACTIVITY', userId, 'ALPHA-SESSION_TIMEOUT', 'SESSION_TIMEOUT');
    // });

  }

  /** To Dismiss snackbar */
  dismiss() {
    this._snackRef.dismissWithAction();
  }

}
