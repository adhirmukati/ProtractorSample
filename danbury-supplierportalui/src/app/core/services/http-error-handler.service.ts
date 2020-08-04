import { Injectable } from '@angular/core';
import { ObservableInput, throwError } from 'rxjs';
import { RemoteLoggingService } from './remote-logging.service';

/**
 * HTTP response error handler.
 */
@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {
  /**
   * base constructor
   * @param logger remote logger service injector
   */
  constructor(private readonly logger: RemoteLoggingService) { }

  /**
   * Handle Http response error.  redirecting to logout on occasion or just logging the error with the remote logging service.
   * @param actionName method/action from which the error occurred
   */
  handleHttpErrorResponse(actionName: string) {
    return (
      error: any,
      caught: any
    ): ObservableInput<{}> | ObservableInput<any> => {
      let errorMsg = '';

      if (error.status === 401) {
        errorMsg = `While ${actionName} user was noted as unauthenticated and logged out of the system. ${error.error.message}`;
        console.warn(
          `While ${actionName} user was noted as unauthenticated and logged out of the system ${error.error.message}`
        );
      } else if (error.error && error.error.message) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMsg = `An error occurred while ${actionName}: ${error.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMsg = `Backend returned code ${
          error.status
          }, body was: ${JSON.stringify(error.error)}`;
      }
      // return an observable with a user-facing error message
      const httpErr = new Error(errorMsg);
      this.logger.logger('', errorMsg, httpErr);
      return throwError(httpErr);
    };
  }

  /**
   * redirects the system to the logout page
   */
  redirectToLogout() {
    // TODO: maybe - change logout URL to something other than the COL logout view
    setTimeout(
      () => window.location.assign(window.location.origin + '/logout?code=4'),
      50
    );
  }
}
