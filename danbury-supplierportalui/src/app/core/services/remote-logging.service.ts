import { Injectable, Injector } from '@angular/core';
import {
  LocationStrategy,
  HashLocationStrategy,
  Location
} from '@angular/common';
import * as StackTrace from 'stacktrace-js';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
/**
 * remote logging service for sending errors to API for standard logging solution
 */
@Injectable({
  providedIn: 'root'
})
export class RemoteLoggingService {
  /** root URL for API calls */
  rootUrl: string;

  /**
   * initialize root URL
   * @param injector base injector
   * @param http HTTP Client injector
   */
  constructor(
    private readonly injector: Injector,
    private readonly http: HttpClient,
    private readonly location: Location
  ) {
    // TODO: set root URL to correct URL for logging service
    this.rootUrl = '/api';
  }

  // TODO: bring back postToServer once we have an API to call for logging
  // private postToServer(message: string, url?: string, stack?: string, isError?: boolean) {
  //   const error =  { message: message, url: url, stack: stack, isError: isError };
  //   const headers = new HttpHeaders({'Content-Type': 'application/json'});
  //   this.http.post(`${this.rootUrl}/v1/error`, error, { headers: headers })
  //     .subscribe(success => {}, err => { console.log(`LOGGER ERROR: ${err}`); });
  // }

  /**
   * log a message
   * @param message the message
   * @param url the URL, if available
   * @param stack the callstack, if available
   * @param isError is the message an error
   */
  public log(message: string, url?: string, stack?: string, isError = false) {

  }

  /**
   * log an error
   * @param error the error that occurred
   */
  public logError(error: any) {
    try {
      const message = error.message ? error.message : error.toString();
      const url = this.getUrl();

      if (error instanceof Error) {
        // get the stack trace, lets grab the last 10 stacks only
        StackTrace.fromError(error).then(stackFrames => {
          // log on the server
          const stackString = stackFrames.map(sf => sf.toString()).join('\n');
          this.log(message, url, stackString, true);
        });
      } else {
        this.log(message, url, 'N/A', true);
      }
    } catch (e) {
      this.log('Error while parsing error: ' + error, '', 'N/A', true);
    }
  }

  /** gets the current URL */
  private getUrl() {
    // tslint:disable-next-line: deprecation
    const location = this.injector.get(LocationStrategy);
    return location instanceof HashLocationStrategy
      ? (location).path(true) ||
      window.location.toString()
      : window.location.toString();
  }

  logger(user, message, error?) {
    const location = this.location.path();
    const body = error
      ? {
        user: user ? user : 'Unknown',
        message,
        error
      }
      : {
        user: user ? user : 'Unknown',
        message
      };
    this.http.post(`${environment.loggerURL}/${location}`, body);
  }
}
