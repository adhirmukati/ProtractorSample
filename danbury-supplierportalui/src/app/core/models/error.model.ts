/* tslint:disable */
/**
 * Model for errors.  Used for testing the http error handler service.
 */
export interface Error {
  /**
   * time the error occured on the server
   */
  time?: string;

  /**
   * default messages
   */
  message?: string;

  /**
   * error name used as a key into localization files
   */
  name?: string;

  /**
   * parameters for populating the error messages
   */
  properties?: Array<string>;
}
