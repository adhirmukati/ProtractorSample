import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base-service';
import { ApiConfigService } from './api-config.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { AuthenticationService } from './authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { urlType } from '../models/urlType';
import { isNullOrUndefined } from 'util';

/**
 * Used to make generic standard API calls.  The base URL for the service calls is based on the configuration.
 */
@Injectable({
  providedIn: 'root'
})
export class BaseClientService extends BaseService {
  /** Variable to store the token  */
  private readonly token: UserContext;

  /**
   * base constructor
   * @param config API Config service injector
   * @param http HTTP Client injector
   * @param errorHandler HTTP error handler injector
   */
  constructor(
    config: ApiConfigService,
    http: HttpClient,
    private readonly errorHandler: HttpErrorHandlerService,
    private readonly authsrvc: AuthenticationService,
    private readonly cookieService: CookieService
  ) {
    super(config, http);
  }


  /** Getting logged in user details  */
  public getUserDetails(): string {
    let token;
    this.authsrvc.isAuthenticated().then(res => {

      token = res;
      if (token) { return token.accessToken; }
    });
    return null;
  }
  /** Run a GET API call, expecting a response with a single model
   * @param route The endpoint for the request (ie. - '/v1/reports_recent')
   * @param action The action that is performing the request
   * @return A response containing the expected model (single)
   */
  getById<TResponseModel>(
    route: string,
    action = 'error executing requests',
    apiUrlType?: urlType
  ): Observable<HttpResponse<TResponseModel>> {
    const url = apiUrlType === urlType.accessmgmt ? this.accessManagementUrl :
      apiUrlType === urlType.costmodel ? this.rootUrl1 : 
      apiUrlType === urlType.processAPI ? this.processAPIUrl : 
      apiUrlType === urlType.workOrderAPI ? this.workOrderAPIRootUrl : this.rootUrl;
      //temprorily added URL: https://alphaapitst01.cartus.com
    return this.http
      .get<TResponseModel>(url + route, {
        params: this.newParams(),
        observe: 'response',
        responseType: 'json',
        headers: this.getRequestHeaders()
      })
      .pipe(catchError(this.errorHandler.handleHttpErrorResponse(action)));
  }

  /** Run a GET API call, expectiing a response with an array of the expected model
   * @param route The endpoint for the request (ie. - '/v1/reports_recent')
   * @param action The action that is performing the request
   * @return A response containing the expected models (array)
   */
  get<TResponseModel>(
    route: string,
    action = 'error executing requests',
    apiUrlType?: urlType
  ): Observable<HttpResponse<Array<TResponseModel>>> {
    const url = apiUrlType === urlType.accessmgmt ? this.accessManagementUrl :
      apiUrlType === urlType.costmodel ? this.rootUrl1 : 
      apiUrlType === urlType.processAPI ? this.processAPIUrl : 
      apiUrlType === urlType.workOrderAPI ? this.workOrderAPIRootUrl : this.rootUrl;
    return this.http
      .get<TResponseModel>(url + route, {
        params: this.newParams(),
        observe: 'response',
        responseType: 'json',
        headers: this.getRequestHeaders()
      })
      .pipe(catchError(this.errorHandler.handleHttpErrorResponse(action)));
  }

  /** Run a PUT API call
   * @param route The endpoint for the request (ie. - '/v1/reports_recent')
   * @param body The object that is being updated
   * @param action The action that is performing the request
   * @return A response containing the expected result (single)
   */
  put<TResponseModel>(
    route: string,
    body: any,
    action = 'error putting request',
    apiUrlType?: urlType
  ): Observable<HttpResponse<TResponseModel>> {
    const url = apiUrlType === urlType.accessmgmt ? this.accessManagementUrl :
      apiUrlType === urlType.costmodel ? this.rootUrl1 : 
      apiUrlType === urlType.processAPI ? this.processAPIUrl : 
      apiUrlType === urlType.workOrderAPI ? this.workOrderAPIRootUrl : this.rootUrl;
    return this.http
      .put<TResponseModel>(url + route, body, {
        params: this.newParams(),
        observe: 'response',
        responseType: 'json',
        headers: this.getRequestHeaders()
      })
      .pipe(catchError(this.errorHandler.handleHttpErrorResponse(action)));
  }

  /** Run a POST API call
   * @param route The endpoint for the request (ie. - '/v1/reports_recent')
   * @param body The object that is being posted
   * @param action The action that is performing the request
   * @return A response containing the expected result (single)
   */
  post<TResponseModel>(
    route: string,
    body: any,
    action = 'error posting request',
    apiUrlType?: urlType
  ): Observable<HttpResponse<TResponseModel>> {
    const url = apiUrlType === urlType.accessmgmt ? this.accessManagementUrl :
      apiUrlType === urlType.costmodel ? this.rootUrl1 : 
      apiUrlType === urlType.processAPI ? this.processAPIUrl : 
      apiUrlType === urlType.workOrderAPI ? this.workOrderAPIRootUrl : this.rootUrl;
    return this.http
      .post<TResponseModel>(url + route, body, {
        params: this.newParams(),
        observe: 'response',
        responseType: 'text' as 'json',
        headers: this.getRequestHeaders()
      })
      .pipe(catchError(this.errorHandler.handleHttpErrorResponse(action)));
  }

  /** Run a DELETE API call
   * @param route The endpoint for the delete request
   * @param action The action that is performing the request
   * @return A response containing the expected result
   */
  delete<TResponseModel>(
    route: string,
    action = 'error delete request',
    apiUrlType?: urlType
  ): Observable<HttpResponse<TResponseModel>> {
    const url = apiUrlType === urlType.accessmgmt ? this.accessManagementUrl :
      apiUrlType === urlType.costmodel ? this.rootUrl1 : 
      apiUrlType === urlType.processAPI ? this.processAPIUrl : 
      apiUrlType === urlType.workOrderAPI ? this.workOrderAPIRootUrl : this.rootUrl;
    return this.http
      .delete<TResponseModel>(url + route, {
        params: this.newParams(),
        observe: 'response',
        responseType: 'json',
        headers: this.getRequestHeaders()
      })
      .pipe(catchError(this.errorHandler.handleHttpErrorResponse(action)));
  }


   /** Run a Patch API call
   * @param route The endpoint for the request (ie. - '/v1/reports_recent')
   * @param body The object that is being pathed
   * @param action The action that is performing the request
   * @return A response containing the expected result (single)
   */
  patch<TResponseModel>(
    route: string,
    body: any,
    action = 'error patching request',
    apiUrlType?: urlType
  ): Observable<HttpResponse<TResponseModel>> {
    const url = apiUrlType === urlType.accessmgmt ? this.accessManagementUrl :
      apiUrlType === urlType.costmodel ? this.rootUrl1 : 
      apiUrlType === urlType.processAPI ? this.processAPIUrl : 
      apiUrlType === urlType.keyDatesAPI ? this.keyDateAPIRootUrl : this.rootUrl;
    return this.http
      .patch<TResponseModel>(url + route, body, {
        params: this.newParams(),
        observe: 'response',
        responseType: 'json',
        headers: this.getRequestHeaders()
      })
      .pipe(catchError(this.errorHandler.handleHttpErrorResponse(action)));
  }


  private getRequestHeaders(): HttpHeaders {

    // Only send headers which have values to send
    const roles = sessionStorage.getItem('roles');
    const appContext = sessionStorage.getItem('car-ses-con');
    let headers;
    const token = this.cookieService.get('car-ses-tok');
    if (!isNullOrUndefined(roles) && !isNullOrUndefined(appContext)) {
      headers = new HttpHeaders({
        'Authorization': token,
        'Roles': sessionStorage.getItem('roles'),
        'app-context': sessionStorage.getItem('car-ses-con')
      });
    } else {
      headers = new HttpHeaders({
        'Authorization': token,
      });
    }
   
    return headers;
  }
}

/** It is a class to store user context */
export default interface UserContext {
  /** User Name */
  username: string;
  /** Access Tocken */
  access_token: string;
  /** ID Tocken */
  id_token: string;
  /** User Roles */
  Roles: string[];
  /** Expiry seconds */
  exp: number;
}
