import { TestBed, async, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AppConfigService } from './core/services/app-config.service';
import { ApiConfigService } from './core/services/api-config.service';
import { RemoteLoggingService } from './core/services/remote-logging.service';
import { MockedAppConfigService } from '../../e2e/src/mocks/mocked-app-config.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Title } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material/material.module';
import { CookieService } from 'ngx-cookie-service';
import { PartySharedService } from './core/services/party-shared.service';
import { LoggedInUserService } from './core/services/loggedin-user-service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let cookieService: CookieService;
  let partySharedService: PartySharedService;
  let loggedInUserService: LoggedInUserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule,
        MaterialModule
      ],
      providers: [
        { provide: AppConfigService, useClass: MockedAppConfigService },
        RemoteLoggingService,
        ApiConfigService,
        CookieService,
        Title
      ],
      declarations: [],
    })
      .compileComponents();
    router = TestBed.get(Router);
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    cookieService = TestBed.get(CookieService);
    partySharedService = TestBed.get(PartySharedService);
    loggedInUserService = TestBed.get(LoggedInUserService);
    spyOn(partySharedService, 'getPartyId').and.returnValue(of({ 'userId': 'Abc Xyz' }));
    spyOn(loggedInUserService, 'getLoggedInUserDetails').and.returnValue(of({ 'name': 'Abc Xyz' }));
    spyOn(component, 'refreshIdleCookie').and.callThrough();
    spyOn(component, 'onKeyPress').and.callThrough();
    spyOn(component, 'onMouseMove').and.callThrough();
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // it('Redirect to Login page when logout method is called', () => {
  //   const navigateSpy: jasmine.Spy = spyOn(router, 'navigate');
  //   component.logout();
  //   expect(navigateSpy).toHaveBeenCalledWith(['logout']);
  // });

  // it('Invoke the Refresh timeout method when user is active', () => {
  //   expect(component.refreshIdleCookie).toHaveBeenCalled();
  // });

  // it('Listen to mouseover and keypress event, refresh the timeout', () => {
  //   document.dispatchEvent(new Event('mousemove'));
  //   expect(component.onMouseMove).toHaveBeenCalled();
  //   document.dispatchEvent(new Event('keypress'));
  //   expect(component.onKeyPress).toHaveBeenCalled();
  // });

  // it('Should call logout method when timeout occurs', () => {
  //   const timeoutSpy = spyOn(component, 'logout');
  //   const idleExpireMs = (new Date().getTime() - (3 * 60000) - 500);
  //   sessionStorage.setItem('lastAction', idleExpireMs.toString());
  //   component.checkIdle();
  //   expect(timeoutSpy).toHaveBeenCalledTimes(1);
  // });
  /*

  /* Commenting this unit case as we have removed the desktop side nav

  // it('should allow toggling minimized sidebar through code', () => {
  //   component.sidebarMinimized = false;
  //   component.sidebarToggle();
  //   expect(component.sidebarMinimized).toBeTruthy();
  //   component.sidebarToggle();
  //   expect(component.sidebarMinimized).toBeFalsy();
  // });

  */
});
