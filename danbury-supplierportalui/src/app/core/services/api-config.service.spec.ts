import { TestBed, inject } from '@angular/core/testing';

import { ApiConfigService } from './api-config.service';
import { MockedAppConfigService } from '../../../../e2e/src/mocks/mocked-app-config.service';
import { AppConfigService } from './app-config.service';

xdescribe('ApiConfigService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AppConfigService, useClass: MockedAppConfigService },
        ApiConfigService
      ]
    });
  });

  it('should be created', inject([ApiConfigService], (service: ApiConfigService) => {
    expect(service).toBeTruthy();
  }));
});
