import { TestBed, async } from '@angular/core/testing';

import { LoggerService } from './logger.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoggerService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggerService = TestBed.get(LoggerService);
    expect(service).toBeTruthy();
  });
});
