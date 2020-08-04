import { TestBed } from '@angular/core/testing';
import { DateAdapterService } from './date-adapter.service';

describe('DateAdapterService', () => {
  let service: DateAdapterService;
  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => {
    service = TestBed.get(DateAdapterService);
  });

  it('should be created', () => {
    const service: DateAdapterService = TestBed.get(DateAdapterService);
    expect(service).toBeTruthy();
  });

  it('should return date in formated order', () => {
    const retutnDate = service.format(new Date(2019, 7, 20, 10, 33, 30, 0), 'input');
    expect(retutnDate).toEqual('2019-08-20');
  });

  it('should return default order of date', () => {
    const retutnDate = service.format(new Date(2019, 7, 20, 10, 33, 30, 0), '');
    expect(retutnDate).toEqual('Tue Aug 20 2019');
  });
});
