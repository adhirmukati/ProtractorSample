/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParameterCodec, HttpParams } from '@angular/common/http';
import { ApiConfigService } from './api-config.service';

/**
 * Custom parameter codec to correctly handle the plus sign in parameter
 * values. See https://github.com/angular/angular/issues/18261
 */
class ParameterCodec implements HttpParameterCodec {
  /** URL encode a key */
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }

  /** URL encode a value */
  encodeValue(value: string): string {
    return encodeURIComponent(value);
  }

  /** URL decode a key */
  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  /** URL decode a value */
  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}
/** @ignore */
const PARAMETER_CODEC = new ParameterCodec();

/**
 * Gets config data for API services
 */
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  /**
   * base constructor 
   * @param config API Config Service injection
   * @param http HTTP Client injection
   */
  constructor(protected config: ApiConfigService, protected http: HttpClient) {
  }

  /**
   * The root URL for API operations
   */
  private _rootUrl: string;

  /**
   * Returns the root url for candidate Process API operations. If not set directly in this
   * service, will fallback to ApiConfiguration.rootUrl.
   */
  get rootUrl(): string {
    return this._rootUrl || this.config.rootUrl;
  }

  /**
   * Returns the root url for cost model API operations. If not set directly in this
   * service, will fallback to ApiConfiguration.rootUrl.
   */
  get rootUrl1(): string {
    return this._rootUrl || this.config.rootUrl1;
  }

  /**
   * Returns the root url for cost model API operations. If not set directly in this
   * service, will fallback to ApiConfiguration.rootUrl.
   */
  get accessManagementUrl(): string {
    return this._rootUrl || this.config.accessManagementRootUrl;
  }

  get processAPIUrl(): string {
    return this._rootUrl || this.config.processAPIRootUrl;
  }

  get workOrderAPIRootUrl(): string {
    return this._rootUrl || this.config.workOrderAPIRootUrl;
  }

  get keyDateAPIRootUrl(): string {
    return this._rootUrl || this.config.keyDateAPIRootUrl;
  }

  headers(): string {
    return `eyJraWQiOiJ4U21iVVhZOUJod2VXV1lLZktCWWoyZUdQRGFvYkhkSGQwLVhYWkR1
    aGRrIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkt3dUxRblJqa2swSHdt
    Y1N5S2JkWnlGeUdYUXA0TjdENWNNNk1DcFVnMlkiLCJpc3MiOiJodHRwczovL2NhcnR1c3
    BvYy5va3RhLmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJp
    YXQiOjE1Njk2MTA0OTUsImV4cCI6MTU2OTYxNDA5NSwiY2lkIjoiMG9hbzg5dzZyM2s0SF
    BRVU0zNTYiLCJ1aWQiOiIwMHUxZjByaWhqOWx6TmpvejM1NyIsInNjcCI6WyJvcGVuaWQi
    XSwic3ViIjoiVEVTVF9tb2hhbi5hc2hva2FuQG1pbmR0cmVlLmNvbSJ9.EtkcCvIkoUmMY
    OyKV_9pt7vpc_9smpv5Y8ZVtzVZTqVs9Y7tfIFJWjnzujOR1EyQ0YQFQ0WKn49k041BRAR
    DZiAXBIYHJ_2PFZVXJ50Nz_tnw1VuBqL-pzKC9-LlmLFPImP-oBM8SoMRxAzAUhgQmLOZ6
    IATJJcF2L3Gyz0GDizWs0stLk_ijVeLtz4llGtO-TTsvZGyRpd2xB-CxWmXp0EEq3yJKRRh
    S8M45_j9365oWbluMqr7AZdyqkbBgoa-GL1TBxj6PdoKhLnwX1VkhLI0oGvPR1ieQNTyJvA
    9bQ_ZrfQ4SbuePdm1Se_YP8KJd5Mo5i1HfUQI_lrZs1aHdg`;
  }

  /**
   * Sets the root URL for API operations in this service.
   */
  set rootUrl(rootUrl: string) {
    this._rootUrl = rootUrl;
  }

  /**
   * Creates a new `HttpParams` with the correct codec
   */
  protected newParams(): HttpParams {
    return new HttpParams({
      encoder: PARAMETER_CODEC
    });
  }
}
