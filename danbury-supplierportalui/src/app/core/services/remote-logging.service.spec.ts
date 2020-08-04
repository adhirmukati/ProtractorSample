import { TestBed, inject, async, tick, fakeAsync } from '@angular/core/testing';

import { RemoteLoggingService } from './remote-logging.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HashLocationStrategy, LocationStrategy, Location } from '@angular/common';
import * as StackTrace from 'stacktrace-js';

xdescribe('RemoteLoggingService', () => {
  const mockedLocationStrategy = jasmine.createSpyObj<HashLocationStrategy>(['path']);
  console.log(mockedLocationStrategy instanceof HashLocationStrategy);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        RemoteLoggingService,
        { provide: LocationStrategy, useValue: mockedLocationStrategy },
        Location,
        {
          provide: LocationStrategy,
          useClass: HashLocationStrategy
        }
      ]
    });
  });

  it('should be created', inject([RemoteLoggingService], (service: RemoteLoggingService) => {
    expect(service).toBeTruthy();
  }));

  it('should call log with the stack trace when logging errors', fakeAsync(() => {
    const service: RemoteLoggingService = TestBed.get(RemoteLoggingService);
    spyOn<any>(service, 'getUrl').and.callFake(() => 'http://test.com');
    const stackFrames = spyOn(StackTrace, 'fromError').and.callFake(() => Promise.resolve(['Call Stack Line 1']));
    const logSpy = spyOn(service, 'log').and.callThrough();
    const errorSpy = spyOn(service, 'logError').and.callThrough();
    const error: Error = new Error('testing');
    service.logError(error);
    expect(stackFrames).toHaveBeenCalled();
    tick(500); // Needed for the promise to return
    expect(logSpy).toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalled();
  }));

  it('should call log with the stack trace when logging error text', async(() => {
    const service: RemoteLoggingService = TestBed.get(RemoteLoggingService);
    const logSpy = spyOn(service, 'log').and.callThrough();
    const errorSpy = spyOn(service, 'logError').and.callThrough();
    service.logError('Testing');
    expect(logSpy).toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalled();
  }));

  it('should call log with the stack trace when logging none errors', async(() => {
    const service: RemoteLoggingService = TestBed.get(RemoteLoggingService);
    const logSpy = spyOn(service, 'log').and.callThrough();
    const errorSpy = spyOn(service, 'logError').and.callThrough();
    service.log('Testing');
    expect(logSpy).toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();
  }));
});
