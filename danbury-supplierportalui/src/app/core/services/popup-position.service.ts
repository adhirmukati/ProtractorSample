import { Injectable, InjectionToken, Injector } from '@angular/core';
import { PortalInjector } from '@angular/cdk/portal';

/** Injection Token to pass data to modal */
export const ModalData = new InjectionToken<any>('ModalData');

/** service to create injection to pass data to modal*/
@Injectable({
  providedIn: 'root'
})
export class PopupPositionService {

  /** Base constructor method
   * @param injector Injector  injection
   */
  constructor(private readonly injector: Injector) { }

  /** createInjector method to create injector to pass data */
  createInjector(data): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(ModalData, data);
    return new PortalInjector(this.injector, injectorTokens);
  }
}
