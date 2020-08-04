import { TestBed, inject } from '@angular/core/testing';

import { BaseService } from './base-service';
import { ApiConfigService } from './api-config.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

xdescribe('BaseService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        BaseService,
        { provide: ApiConfigService }, CookieService
      ]
    });
  });

  it('should be created', inject([BaseService], (service: BaseService) => {
    expect(service).toBeTruthy();
  }));
});
