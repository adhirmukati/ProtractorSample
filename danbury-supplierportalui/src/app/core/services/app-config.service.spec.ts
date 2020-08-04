import { TestBed, inject } from '@angular/core/testing';

import { AppConfigService } from './app-config.service';
import { MockedAppConfigService } from '../../../../e2e/src/mocks/mocked-app-config.service';

xdescribe('AppConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: 'appConfig', useClass: MockedAppConfigService },
        AppConfigService
      ]
    });
  });

  it('should be created', inject([AppConfigService], (service: AppConfigService) => {
    expect(service).toBeTruthy();
  }));
});
