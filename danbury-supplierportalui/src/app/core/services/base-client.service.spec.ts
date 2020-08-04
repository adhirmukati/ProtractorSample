import { TestBed } from '@angular/core/testing';

import { BaseClientService } from './base-client.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiConfigService } from './api-config.service';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { CONFIG } from 'src/UnitTest-Support/Mocks/data.mock';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';
import { OAuthLogger, OAuthService, UrlHelperService } from 'angular-oauth2-oidc';
import { CookieService } from 'ngx-cookie-service';

describe('BaseClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      HttpErrorHandlerService,
      { provide: ApiConfigService },
      { provide: 'appConfig', useValue: CONFIG },
      Location,
      {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
      }, OAuthLogger, OAuthService, UrlHelperService, CookieService
    ]
  }));

  it('should be created', () => {
    const service: BaseClientService = TestBed.get(BaseClientService);
    expect(service).toBeTruthy();
  });
});
