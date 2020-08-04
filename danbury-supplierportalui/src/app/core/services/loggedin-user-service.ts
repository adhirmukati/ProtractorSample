import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseClientService } from '../../../app/core/services/base-client.service';
import { catchError, map } from 'rxjs/operators';
import { RemoteLoggingService } from '../../../app/core/services/remote-logging.service';
import { urlType } from '../models/urlType';
import { NotificationsService } from './notifications.service';


/** user service to post details of login to the server
 * header
 */
@Injectable({
    providedIn: 'root'
})
export class LoggedInUserService {
    /**
     * base constructor
     */
    constructor(
         protected baseClient: BaseClientService,
        private readonly logSvc: RemoteLoggingService,
        private readonly notificationService: NotificationsService
    ) { }

    getLoggedInUserDetails(): Observable<any> {
    
        return this.baseClient.getById<any>('/user/context', '', urlType.accessmgmt).pipe(
            map(r => r.body),
            catchError((err, source) => {
                const empty: any = null;
                // this.logSvc.logError(err);
                this.notificationService.flashNotification(
                    'error',
                    err.message,
                    true,
                    'dismiss'
                  );
                return of(empty);
            })
        );
        
    }
}
