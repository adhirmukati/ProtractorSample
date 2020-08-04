/* tslint:disable */
import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';

/**
 * Gets the global API services configuration
 */
@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  /** Root URL for Candidate Process API operations */
  rootUrl: string;
  /** Root URL for Cost Model API operations */
  rootUrl1: string;
  /** Root URL for Cost Model API operations */
  accessManagementRootUrl: string;
  processAPIRootUrl: string;
  workOrderAPIRootUrl: string;
  keyDateAPIRootUrl: string;

  /**
   * Initialize the rootURL
   */
  constructor(private readonly config: AppConfigService) {
    const apiConfig: { [key: string]: string | number } = this.config.getConfig('api');
    this.rootUrl = `${apiConfig.protocol}://${apiConfig.host}`;

    const apiConfig1: { [key: string]: string | number } = this.config.getConfig('costModel');
    this.rootUrl1 = `${apiConfig1.protocol}://${apiConfig1.host}`;

    const apiConfig2: { [key: string]: string | number } = this.config.getConfig('accessManagement');
    this.accessManagementRootUrl = `${apiConfig2.protocol}://${apiConfig2.host}`;

    const apiConfig3: { [key: string]: string | number } = this.config.getConfig('processAPI');
    this.processAPIRootUrl = `${apiConfig3.protocol}://${apiConfig3.host}`;

    const apiConfig4: { [key: string]: string | number } = this.config.getConfig('workOrderAPI');
    this.workOrderAPIRootUrl = `${apiConfig4.protocol}://${apiConfig4.host}`;

    const apiConfig5: { [key: string]: string | number } = this.config.getConfig('keyDatesAPI');
    this.keyDateAPIRootUrl = `${apiConfig5.protocol}://${apiConfig5.host}`;
  }
}
