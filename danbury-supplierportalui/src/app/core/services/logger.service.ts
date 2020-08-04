import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as callerPath from 'caller-path';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class LoggerService {
  constructor(private readonly http: HttpClient) {
  }


  log(logData: object) {
    // tslint:disable-next-line: max-line-length
    /*const logStashUrl = String(environment.URL_LOGSTASH ? environment.URL_LOGSTASH : 'https://car-alpha-logstash-dev01-982921113.us-west-2.elb.amazonaws.com/');
    if (logStashUrl.length) {
      const url = logStashUrl;
      const body = logData;
      // tslint:disable-next-line: no-shadowed-variable
      this.http.post(`${url}`, body).subscribe(
        success => {
          console.log(success);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      console.log(logData);
    }*/
  }

  public error(message: string, errorStackTrace?: object, errorSource?: string, additionalErrorLogData?: object): any {

    const erroLogObject = {
      TimeStamp: moment().format(),
      Message: message,
      Error: errorStackTrace,
      ErrorLocation: errorSource || callerPath(),
      AdditionalErrorInfo: additionalErrorLogData
    };
    this.log(erroLogObject);

  }

  public info(message: string, infoLog?: object, infoSource?: string, additionalInfoLogData?: object): any {
    const infoLogObject = {
      TimeStamp: moment().format(),
      Message: message,
      Info: infoLog,
      InfoSource: infoSource || callerPath(),
      AdditionalInfoLogData: additionalInfoLogData
    };
    this.log(infoLogObject);
  }

  // tslint:disable-next-line: variable-name
  public dataAudit(type: Object, userId: string, event: string, newValue?: object, previousValue?: object): any {
    const dataAuditLogObject = {
      Source: 'ALPHA_UI',
      AuditType: type,
      Event: event,
      UserId: userId,
      PreviousValue: previousValue,
      NewValue: newValue,
      TimeStamp: new Date()
    };
    this.log(dataAuditLogObject);
  }

  // tslint:disable-next-line: no-identical-functions
  public activityAudit(type: Object, userId: string, event: string, activity?: string): any {
    const activityAuditLogObject = {
      Source: 'ALPHA_UI',
      AuditType: type,
      Event: event,
      UserId: userId,
      Activity: activity,
      TimeStamp: new Date()
    };
    this.log(activityAuditLogObject);
  }
}
