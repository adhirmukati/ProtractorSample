import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { WorkOrder } from '../models/work-order.model'
import { BaseClientService } from './base-client.service';
import { urlType } from '../models/urlType';
import { LoggerService } from './logger.service';
import { UpdateKeys } from '../models/updateKeys.model';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

  constructor(private http:HttpClient, private readonly cookieService: CookieService, private readonly baseClientService: BaseClientService, private readonly customLogger: LoggerService) { }
  
  ngOnInit() {
    this.getAllWorkOrders();
  }

  /**
   * Return the work order json list and loop to display in the table
   */
  getAllWorkOrders(searchText?,skipRecords:number=0,limit:number=20): Observable<any> {
    let queryString = `fromDate=2019-12-02T09:43:34.211Z&skip=${skipRecords}&limit=${limit}`;
    if(searchText) {
      queryString = `${queryString}&searchText=${encodeURIComponent(searchText)}`;
    }
    return this.baseClientService.get<WorkOrder>(`/vendor/sp-move-request?${queryString}`,'',urlType.processAPI).pipe(
      map(response => response.body)
    ); 
  }

  /**
   * Return the work order json list and loop to display in the table
   */
  getWorkOrderDetails(workOrderId): Observable<any> {
    let queryString = `deliveredTo=${workOrderId}&type=supplier-order&expandProdInstance=true`;

    return this.baseClientService.get<any>(`/order-management/api/v1/order?${queryString}`,'',urlType.workOrderAPI).pipe(
      map(response => response.body)
    ); 
  }

  updateKeyDates(keyDates: UpdateKeys[]): Observable<any> {
    return this.baseClientService
    .patch<any>(`/vendor/move-response`, keyDates, '', urlType.processAPI)
    .pipe(
      map(response => response.body),
      catchError((err) => {
        return this.catchBlock('sending response to quote Failed', err, 'string');
      })
    )
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