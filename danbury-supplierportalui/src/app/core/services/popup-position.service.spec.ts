import { TestBed, async } from '@angular/core/testing';
import { PopupPositionService } from './popup-position.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CONFIG } from 'src/UnitTest-Support/Mocks/data.mock';


describe('PopupPositionService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PopupPositionService,
        { provide: 'appConfig', useValue: CONFIG }
      ]
    });
  }));

  it('should be created', () => {
    const service: PopupPositionService = TestBed.get(PopupPositionService);
    expect(service).toBeTruthy();
  });

  it('should create createInjector method', () => {
    const service: PopupPositionService = TestBed.get(PopupPositionService);
    expect(service.createInjector).toBeTruthy();
  });

  it('should return  object', () => {
    const service: PopupPositionService = TestBed.get(PopupPositionService);
    const data: any = { clientX: 300, overlayRef: OverlayRef };
    const result: Object = service.createInjector(data);
    expect(typeof result).toBe('object');
    expect(result).toBeTruthy();
  });
});
