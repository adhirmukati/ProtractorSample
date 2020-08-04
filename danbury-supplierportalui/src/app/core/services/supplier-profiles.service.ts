import { Injectable } from '@angular/core';
import { Candidate, CandidateDuplicateParam, CandidateProfiles } from '../models/candidate';
import { BaseClientService } from './base-client.service';
import { Observable, of, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { RemoteLoggingService } from './remote-logging.service';
import { Level } from '../models/level';
import { APIResponse, APIResponseDuplicate } from '../models/response.model';
import { LoggerService } from './logger.service';
import { urlType } from '../models/urlType';

@Injectable({
  providedIn: 'root'
})
export class SupplierProfilesService {
  /**
   * base constructor
   * @param baseClientService baseclient service
   * @param logSvc remote logging service
   */
  constructor(
    private readonly baseClientService: BaseClientService,
    private readonly logSvc: RemoteLoggingService,
    private readonly customLogger: LoggerService
  ) { }

  /**observable for subject */
  selectedValue$ = new Subject<string>();
  totalCount = new Subject<any>();
  totalCount$: Observable<any> = this.totalCount.asObservable();
  testSubject = new Subject<any>();
  testSubject$: Observable<any> = this.testSubject.asObservable();
  newCandidate: Candidate;

  /**variable to store the total cost after tax assistance is included */
  totalSum: number;

  
/**
 * Get roles and Capabilities for specic party
 * @param partyId string corresponding to logged in user
 */
  getRoleCapabilities(partyId: string): Observable<any> {
    return this.baseClientService
      .get<any>(`/getUserRoleCapabilities/` + partyId, '', urlType.accessmgmt)
      .pipe(
        map(r => r.body),
        catchError(err => {
          this.logSvc.logger('', 'Failed to get candidate profiles', err);
          const emptyObj = {};
          return of(emptyObj);
        })
      );
  }

  /**
   * use to subscribe to selectedValue$
   */
  getMessage(): Observable<any> {
    return this.selectedValue$.asObservable();
  }
 
  
  /**
   * used to send email invite to candidate
   * @param request candidate to whom invite is to be sent
   */
  sendInviteToCandidate(request: Candidate): Observable<APIResponse> {
    return this.baseClientService
      .post<APIResponse>(`/candidate/email`, request)
      .pipe(
        map(r => r.body),
        catchError((err, source) => {
          return this.catchBlock('sending Invite to Candidate Failed', err, 'string');

        })
      );
  }
  
  /**
   * used to resend email invite
   * @param request candidate for whom email is to be resent
   */
  reSendInviteToCandidate(request: Candidate): Observable<APIResponse> {
    return this.baseClientService
      .post<APIResponse>('/candidate/email/resend', request)
      .pipe(
        map(r => r.body),
        catchError((err, source) => {
          return this.catchBlock('Resending Invite to Candidate Failed', err, 'string');

        })
      );
  }

  
  catchBlock(message: string, error: any, dataType: string) {
    let empty: any = null;
    switch (dataType) {
      case 'string': {
        empty = null;
        break;
      }
      case 'object': {
        empty = {};
        break;
      }
      case 'array': {
        empty = [];
        break;
      }
    }
    this.customLogger.error(message, error);
    return of(empty);
  }
}

