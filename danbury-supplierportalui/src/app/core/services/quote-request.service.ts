import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { quoteRequest } from "../models/quote-request";
import { map, catchError } from 'rxjs/operators';
import { BaseClientService } from './base-client.service';
import { urlType } from '../models/urlType';
import { APIResponse } from '../models/response.model';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {

  constructor(private http:HttpClient, private readonly cookieService: CookieService, private readonly customLogger: LoggerService, private readonly baseClientService: BaseClientService) { }

  ngOnInit() {
    this.getAllQuoteRequests();
  }

  /**
   * Return the quote request json list and loop to display in the table
   */
  getAllQuoteRequests(searchText?: string): Observable<Array<quoteRequest>> {
    let queryString = 'fromDate=2020-05-10T09:43:34.211Z&skip=0&limit=100';

    if(searchText) {
      queryString = `${queryString}&searchText=${encodeURIComponent(searchText)}`;
    }
    return this.baseClientService.get<quoteRequest>(`/vendor/sp-quote-request?${queryString}`,'',urlType.processAPI).pipe(
      map(response => response.body)
    );
    
  }

  /**
   * used to send quote response
   * @param quoteResponse quoteResonse object
   */
  sendQuoteResponse(quoteResponse: any): Observable<any> {
    return this.baseClientService
      .post<any>(`/vendor/quote-response`, quoteResponse, '', urlType.processAPI)
      .pipe(
        map( response => response.body),
        catchError((err) => {
          return this.catchBlock('sending response to quote Failed', err, 'string');
        })
      );
  }

  sendQuoteAcceptData(quoteAcceptData: any): Observable<any> {
    return this.baseClientService
      .post<any>(`/vendor/quote-accept`, quoteAcceptData, '', urlType.processAPI)
      .pipe(
        map( response => response.body),
        catchError((err) => {
          return this.catchBlock('sending accept data to quote Failed', err, 'string');
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