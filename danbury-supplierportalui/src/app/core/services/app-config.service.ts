import { Inject, Injectable } from '@angular/core';

/**
 * Gets the global application configuration data
 */
@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  /**
   * Application config data
   */
  configData: any;

  /**
   * Initialize application config data
   */
  constructor(@Inject('appConfig') private readonly config) {
    const configStr = JSON.stringify(config, null, 2);
    this.configData = JSON.parse(configStr);
  }

  /**
   * Use for in-string replacement of search with replacement in str
   */
  replaceString(str, search, replacement) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }

  /**
   * Use to get the data found in the second file (config file)
   */
  public getConfig(key: any): {} {
    return this.configData[key];
  }

  /**
   * Use to get the environment name
   */
  public getEnv(): string {
    return this.configData.environment || 'dev';
  }
}
