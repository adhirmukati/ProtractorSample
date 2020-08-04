import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import * as OktaAuth from '@okta/okta-auth-js';
import { environment } from '../../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  /** Variable to store the token  */
  private readonly authClient: OktaAuth;

  constructor() {
    this.authClient = new OktaAuth({
      // url: environment.oktaUrl,
      clientId: environment.oktaClientId,
      grantType: 'authorization_code',
      issuer: `${environment.oktaUrl}/oauth2/default`,
      redirectUri: environment.oktaRedirectUri
    });
  }

  /** Service call for login */
  async login(user: TokenPayload) {
    try {
      const data = {
        username: user.email,
        password: user.password
      };

      const transaction = await this.authClient.signIn(data);
      const tokens = await this.authClient.token.getWithoutPrompt({
        responseType: 'code',
        sessionToken: transaction.sessionToken
      });
      tokens.forEach(token => {
        if (token.idToken) {
          this.authClient.tokenManager.add('idToken', token);
        }
        if (token.accessToken) {
          localStorage.setItem('token', token.accessToken);
          this.authClient.tokenManager.add('accessToken', token);
        }
        console.log('this.authClient : ' + JSON.stringify(this.authClient, null, 4));
        return this.authClient;
      });

      return {
        transaction,
        tokens
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  async isAuthenticated() {
    // Checks if there is a current accessToken in the TokenManger.
    return this.authClient.tokenManager.get('accessToken');
  }
}
/** Credetials to be sent with login service call  */
export interface TokenPayload {
  /**email */
  email: string;
  /**password */
  password: string;
}
