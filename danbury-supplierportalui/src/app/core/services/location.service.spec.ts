import { TestBed } from '@angular/core/testing';

import { LocationService } from './location.service';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';
import { CONFIG, cityListMock, addressMock, API_ROOT_URL_MOCK, LOCATION } from 'src/UnitTest-Support/Mocks/data.mock';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OAuthLogger, OAuthService, UrlHelperService } from 'angular-oauth2-oidc';
import { BaseClientService } from './base-client.service';
import { RemoteLoggingService } from './remote-logging.service';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

describe('LocationService', () => {
  let service: LocationService;
  let remoteLoggingService: RemoteLoggingService;
  let httpMock: HttpTestingController;
  beforeEach(async () => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      { provide: 'appConfig', useValue: CONFIG },
      Location,
      {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
      },
      OAuthLogger, OAuthService, UrlHelperService, CookieService
    ]
  }));

  beforeEach(() => {
    service = TestBed.get(LocationService);
    remoteLoggingService = TestBed.get(RemoteLoggingService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getCities method', () => {
    // spyOn(service, 'getCities').and.returnValue(of(cityListMock));
    service.getCities().subscribe(result => {
      expect(result).toBeDefined();
      expect(result).toEqual(cityListMock);
    });
  });
  // it('should call getLocations method', () => {
  //   spyOn(service, 'getLocations').and.returnValue(of(LOCATION));
  //   service.getLocations().subscribe(result => {
  //     expect(result).toBeDefined();
  //     expect(result.length).toEqual(10);
  //   });
  // });
  // it('should call getAddress method', () => {
  //   const searchTerm = 'New';
  //   const emsg = '404 error';
  //   spyOn(remoteLoggingService, 'logger').and.callThrough();
  //   service.getAddresses(searchTerm).subscribe(data => {
  //     console.log(data);
  //   },
  //     (error: HttpErrorResponse) => {
  //       expect(remoteLoggingService.logger).toHaveBeenCalled(); // check if executed
  //       expect(error.status).toEqual(404, 'status');
  //       expect(error.error).toEqual(emsg, 'message');
  //     });
  //   const request = httpMock.expectOne(`${API_ROOT_URL_MOCK}/candidate/location/domestic/city/${searchTerm}`);
  //   expect(request.request.method).toBe('GET');
  //   request.flush(emsg, { status: 404, statusText: 'Failed to fetch addresses' });
  //   const request1 = httpMock.expectOne(`https://car-alpha-logstash-dev01-982921113.us-west-2.elb.amazonaws.com/`);
  //   expect(request1.request.method).toBe('POST');
  // });
  // it('be able to retrieve addresses from the API via get', () => {
  //   const searchTerm = 'New';
  //   service.getAddresses(searchTerm).subscribe(address => {
  //     expect(address).toBeDefined();
  //   });
  //   const request = httpMock.expectOne(`${API_ROOT_URL_MOCK}/candidate/location/domestic/city/${searchTerm}`);
  //   expect(request.request.method).toBe('GET');
  //   request.flush(addressMock);
  // });
});
