import { TestBed, inject } from '@angular/core/testing';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Error } from '../models/error.model';
import { Observable } from 'rxjs';
import { RemoteLoggingService } from './remote-logging.service';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';

xdescribe('HttpErrorHandlerService', () => {

  let routeParam;
  const routerMock = {
    navigate: (d) => {
      routeParam = d;
      return { catch: (e) => { } };
    }
  };

  beforeEach(() => {
    routeParam = null;
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        HttpErrorHandlerService,
        { provide: Router, useValue: routerMock },
        RemoteLoggingService,
        Location,
        {
          provide: LocationStrategy,
          useClass: HashLocationStrategy
        }
      ]
    });
  });

  it('should be created', inject([HttpErrorHandlerService], (service: HttpErrorHandlerService) => {
    expect(service).toBeTruthy();
  }));

  it('should log a warning and logout user on a 401 error', inject([HttpErrorHandlerService], (service: HttpErrorHandlerService) => {
    spyOn<HttpErrorHandlerService>(service, 'redirectToLogout').and.callFake(() => { });
    const errorObj = {
      time: '1200 12May18',
      message: 'You are logged out',
      name: '???'
    };
    const respErr = {
      error: errorObj,
      headers: null,
      status: 401,
      statusText: 'Unauthorized',
      url: 'http://example.com:8080/index.html'
    };
    const warn = console.warn;
    console.warn = jasmine.createSpy('warn');
    service.handleHttpErrorResponse('get objects')(new HttpErrorResponse(respErr), null);
    expect(console.warn).toHaveBeenCalledWith('While get objects user was noted as unauthenticated and logged out of the system',
      errorObj.message);
    console.warn = warn;
  }));

  it('should log an error when the server sends back an error object a message',
    (done) => {
      inject([HttpErrorHandlerService], (service: HttpErrorHandlerService) => {
        spyOn<HttpErrorHandlerService>(service, 'redirectToLogout').and.callFake(() => { });
        const errorObj: Error = {
          time: '1200 12May18',
          message: 'Server is down',
          name: '???'
        } as Error;
        const respErr = {
          error: errorObj,
          headers: null,
          status: 500,
          statusText: 'Internal server error',
          url: 'http://example.com:8080/index.html'
        };
        (service.handleHttpErrorResponse('get objects')(new HttpErrorResponse(respErr), null) as Observable<any>)
          .subscribe((a) => {
            done.fail('failed, should have thrown error');
          }, (err) => {
            expect(err.message).toEqual('An error occurred while get objects: Server is down');
            expect(err.stack.startsWith('Error: An error occurred while get objects: Server is down')).toEqual(true);
            done();
          });
      })();
    }
  );

  it('should log an error when the server sends back an error without a message',
    (done) => {
      inject([HttpErrorHandlerService], (service: HttpErrorHandlerService) => {
        spyOn<HttpErrorHandlerService>(service, 'redirectToLogout').and.callFake(() => { });
        const respErr = {
          error: 'an error',
          headers: null,
          status: 501,
          statusText: 'Internal server error',
          url: 'http://example.com:8080/index.html'
        };
        (service.handleHttpErrorResponse('get objects')(new HttpErrorResponse(respErr), null) as Observable<any>)
          .subscribe((a) => {
            done.fail('failed, should have thrown error');
          }, (err) => {
            expect(err.message).toEqual('Backend returned code 501, body was: "an error"');
            expect(err.stack.startsWith('Error: Backend returned code 501, body was: "an error"')).toEqual(true);
            done();
          });

      })();
    }
  );
});
