import { Component, OnInit, OnDestroy, ViewChild, HostListener,HostBinding, NgZone } from '@angular/core';
import { Router, RoutesRecognized, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { AppConfigService } from './core/services/app-config.service';
import { SessionPopUpComponent } from './core/components/session-pop-up/session-pop-up.component';
import { NgIdleKeepaliveModule, Keepalive } from '@ng-idle/keepalive';
import { EventTargetInterruptSource, Idle } from '@ng-idle/core';
import { SwUpdate } from '@angular/service-worker';
import { CookieService } from 'ngx-cookie-service';
import { Capabilities } from 'protractor';
import { NgxSpinnerService } from 'ngx-spinner';
import {Location, SlicePipe} from '@angular/common'
import { environment } from '../environments/environment';

import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
  MatSnackBarHorizontalPosition,
  MatDialog,
  MatIconRegistry
} from '@angular/material';
 import { LoggedInUserService } from './core/services/loggedin-user-service';
import { SessionTimeoutComponent } from './core/components/session-timeout/session-timeout.component';
import { NotificationsService } from './core/services/notifications.service';
import { PartySharedService } from './core/services/party-shared.service';



/** Base application component - builds the site structure */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  supplierContactCapability = 'Supplier Portal Access';
  supplierContactCapabilityAll = 'Supplier Portal Access';
  menuItems = [
    {
      icon: 'logoutIcon',
      title: 'Logout',
      link: '/logout'
    }
  ];
  
  // public navLinks: {
  //     icon: string;
  //     label: string;
  //     path: string;
  //     Capabilities?: string[]
  // }[];

  /** stores all links for navigation */
  allLinks = [
      {
          icon: 'format_quote',
          label: 'Quote Requests',
          path: 'quotes-request',
          Capabilities: [this.supplierContactCapability, this.supplierContactCapabilityAll]
      },
      {
          icon: 'assignment_turned_in',
          label: 'Work Orders',
          path: 'work-orders',
          Capabilities: [this.supplierContactCapability, this.supplierContactCapabilityAll]
      },
      {
        icon: 'emoji_people',
        label: 'Supplier Contacts',
        path: 'supplier-contacts',
        Capabilities: ['Supplier Contact List']
    }
  ];

  /** Tracks if nav on desktop is minimized */
  public sidebarMinimized: boolean;
  /** nav api subscription */
  private readonly navSub: Subscription;

  navLinks: any;
  title = 'session time out';
  idleState = 'NOT_STARTED';
  timedOut = false;
  lastPing?: Date = null;
  loggedInUserName: string;
  loggedInUserInitials: string;
  /** Subscription prop for unsubscribing services */
  private readonly subscription: Subscription = new Subscription();

  /**Session Timeout */
  // MouseOver axis
  lastX = 0;
  lastY = 0;
  idleTimeoutMinutes = 15; // Idle Session Timeout in Minutes
  idleWarningMsgMinutes = 1; // Idle Session Warning Msg Time in Minutes
  idlelastActionKeyName = 'lastAction';
  pollInterval = 1000;
  warningMsg = 'You will be logged out in a minute due to inactivity';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  sessionTimeoutFlag = true;
  sessionCookie: string;


  @HostBinding('class') class = 'alpha-root-section';
  /**
   * Injecting dependencies
   * @param router - To route the page
   * @param dialog - Dialog
   * @param iconRegistry - To display the SVG as maticon
   * @param sanitizer - To import the maticons

  /**
   * @param snackBar to get MatSnackBar
   */
  /** Component instantiation */
  constructor(
    public readonly router: Router,
    private readonly notificationService: NotificationsService,
    private readonly location: Location,
    private readonly appConfig: AppConfigService,
    private readonly titleService: Title,
    private readonly idle: Idle,
    private readonly keepalive: Keepalive,
    public dialog: MatDialog,
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
    private readonly updates: SwUpdate,
    private readonly cookieService: CookieService,
    private readonly snackbar: MatSnackBar,
    private readonly ngZone: NgZone,
    private readonly loggedInUserService: LoggedInUserService,
    private readonly partySharedService: PartySharedService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private readonly spinner: NgxSpinnerService
  ) {
    this.navLinks = [];
    iconRegistry.addSvgIcon(
        'homeicon',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/navbar-icons/homenav-icon.svg'));
    iconRegistry.addSvgIcon(
        'costicon',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/navbar-icons/costnav-icon.svg'));
    iconRegistry.addSvgIcon(
        'clientIcon',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/navbar-icons/group-work-24px.svg'));
    iconRegistry.addSvgIcon(
        'candidateicon',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/navbar-icons/candidatenav-icon.svg'));
    iconRegistry.addSvgIcon(
        'clientContactIcon',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/navbar-icons/client-contact.svg'));
    iconRegistry.addSvgIcon(
        'authoriseicon',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/navbar-icons/authorisednav-icon.svg'));
    iconRegistry.addSvgIcon(
        'destinationicon',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/navbar-icons/destinationnav-icon.svg'));
    iconRegistry.addSvgIcon(
        'rent',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/candidate-assessment/rent.svg'));
    iconRegistry.addSvgIcon(
        'house',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/candidate-assessment/house.svg'));
    iconRegistry.addSvgIcon(
        'apartment',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/candidate-assessment/apartment.svg'));
    iconRegistry.addSvgIcon(
        'town',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/candidate-assessment/townhouse.svg'));
    iconRegistry.addSvgIcon(
        'baseline-info',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/candidate-assessment/baseline-info.svg'));
    iconRegistry.addSvgIcon(
        'comment',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/candidate-assessment/comments.svg'));
    iconRegistry.addSvgIcon(
        'location',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/candidate-assessment/location-pointer.svg'));


    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });

    matIconRegistry.addSvgIcon(
      'person-one',
      domSanitizer.bypassSecurityTrustResourceUrl(
        './assets/images/candidate-assessment/person-one.svg'
      )
    );
    matIconRegistry.addSvgIcon(
      'person-two',
      domSanitizer.bypassSecurityTrustResourceUrl(
        './assets/images/candidate-assessment/person-two.svg'
      )
    );
    matIconRegistry.addSvgIcon(
      'person-four',
      domSanitizer.bypassSecurityTrustResourceUrl(
        './assets/images/candidate-assessment/person-four.svg'
      )
    );
    matIconRegistry.addSvgIcon(
      'profileIcon',
      domSanitizer.bypassSecurityTrustResourceUrl(
        './assets/images/candidate-assessment/profile_icon.svg'
      )
    );
    matIconRegistry.addSvgIcon(
      'logoutIcon',
      domSanitizer.bypassSecurityTrustResourceUrl(
        './assets/images/candidate-assessment/logout_icon.svg'
      )
    );
    matIconRegistry.addSvgIcon(
      'exploreicon',
      domSanitizer.bypassSecurityTrustResourceUrl(
        './assets/images/destination-images/Path 831.svg'
      )
    );
    this.populateNavLinks();
  }
  reverseNumber(countdown: number) {
    return 300 - (countdown - 1);
  }
  /** Component Angular initialization lifecycle hook */
  ngOnInit() {
    // if (this.appConfig.getConfig('enableAppDynamics')) {
      //   // Load AppDynamics
    //   const el = document.createElement('script');
    //   el.src = 'https://cdn.appdynamics.com/adrum/adrum-latest.js';
    //   el.type = 'text/javascript';
    //   document.getElementsByTagName('head')[0].appendChild(el);
    // }
    // this.router.events.subscribe((event) => {
    //   if ((event instanceof NavigationEnd) && ((window as any).ga)) {
    //     // Google Analytics
    //       (window as any).ga('set', 'page', `${window.location.pathname}#${event.urlAfterRedirects}`);
    //       (window as any).ga('send', 'pageview');
    //   }
    // });
    // if ((window as any).ga) {
      //   const googleAnalyticsConfig: { [key: string]: string } = this.appConfig.getConfig('google_analytics');
      //   (window as any).ga('create', googleAnalyticsConfig.key, 'auto'); // Start Google Analytics session
      // }
      if (this.isIE() === null) {
        /*Checking for cookies availability else redirect to login*/
       
        this.sessionCookie = this.cookieService.get('car-ses-tok');
        
        if((this.sessionCookie == null || this.sessionCookie.length === 0)){
          this.logout();
        }
        this.getLoggedInUserDetails();
        this.popUp();
        // this.navLinks =this.allLinks;
      this.startIdleTimeCountDown();
    } else {
      this.router.navigate(['not-supported']); // redirect to non-supported url.
    }
  }

  /** Toggles compressed display of desktop template and navigation */
  sidebarToggle() {
    this.sidebarMinimized = !this.sidebarMinimized;
  }
  
  
  popUp() {
    this.idle.setIdle(900);
    this.idle.setTimeout(300);
    this.idle.setInterrupts([
      new EventTargetInterruptSource(
        null,
        'keydown DOMMouseScroll mousewheel mousedown touchstart touchmove scroll'
      )
    ]);

    this.idle.onIdleEnd.subscribe(() => {
      this.idleState = 'NO_LONGER_IDLE';
    });
    this.idle.onTimeout.subscribe(() => {
      this.idleState = 'TIMED_OUT';
      this.timedOut = true;
    });
    this.keepalive.interval(15);
    this.idle.onIdleStart.subscribe(() => {
      this.idleState = 'IDLE_START';
    });
    this.idle.onTimeoutWarning.subscribe((countdown: any) => {
      this.idleState = 'IDLE_TIME_IN_PROGRESS';
      const dialogRef = this.dialog.open(SessionPopUpComponent, {
        panelClass: '',
        data: ''
      });
      dialogRef.componentInstance.progressCount = this.reverseNumber(countdown);
      dialogRef.componentInstance.countMinutes = Math.floor(countdown / 60);
      dialogRef.componentInstance.countSeconds = countdown % 60;
    });
  }

 

  getLoggedInUserDetails(): void {
    this.subscription.add(
      this.loggedInUserService
        .getLoggedInUserDetails()
        .subscribe(response => { 
         // 

         if(response !== null)
         {
          this.partySharedService.updateData(response.userId);
          this.loggedInUserName = response.name.replace(/ .*/, '');
          const matches = response.name.match(/\b(\w)/g);
          this.loggedInUserInitials = matches.join('').substring(0,2); 
          sessionStorage.setItem('car-ses-con', response.userId);
         }
        })
    );
  }
    /**
     * scroll top on every router click
     */
    onActivate() {
      document.querySelector('.main-content').scrollTop = 0;
  }

  /** Component Angular destructor lifecycle hook */
  ngOnDestroy(): void {
    if (this.navSub && !this.navSub.closed) {
      this.navSub.unsubscribe();
    }
    this.subscription.unsubscribe();
  }

  async populateNavLinks() {

    if (!this.appConfig.getConfig('byPassAuthorization')) {

        const partyId = await this.partySharedService.getPartyId();
        if(!partyId){
          this.logout();
        }
        const capabilities = await this.partySharedService.getRoleCapabilities(partyId);
        const val = [];
        for (let i = 0; i < capabilities.roleCapabilities.length; i++) {
            if (capabilities.roleCapabilities[i].roleName === 'application-reliability-analyst' ||
                capabilities.roleCapabilities[i].roleName === 'application-owner' ||
                capabilities.roleCapabilities[i].roleName === 'service-desk') {
                val.push({"name":this.supplierContactCapabilityAll,
                "operation": "read", "permission":"allow"})
                capabilities.roleCapabilities[i].capabilities = val;
            }
        }
        for (let i = 0; i < this.allLinks.length; i++) {
            if (!!this.allLinks[i].Capabilities && this.allLinks[i].Capabilities.length > 0) {
                let isFound = false;
                if (!!capabilities && !!capabilities.roleCapabilities && capabilities.roleCapabilities.length > 0) {
                    for (let rc = 0; rc < capabilities.roleCapabilities.length; rc++) {
                        if (!!capabilities.roleCapabilities[rc].capabilities &&
                            capabilities.roleCapabilities[rc].capabilities.length > 0) {
                            for (let j = 0; j < this.allLinks[i].Capabilities.length; j++) {
                                for (let k = 0; k < capabilities.roleCapabilities[rc].capabilities.length; k++) {
                                    if (capabilities.roleCapabilities[rc].capabilities[k].name === this.allLinks[i].Capabilities[j]) {
                                        isFound = true;
                                        break;
                                    }
                                }
                                if (isFound) {
                                    break;
                                }
                            }
                        }
                        if (isFound) {
                            break;
                        }
                    }
                }
                if (isFound) {
                    this.navLinks = this.navLinks.concat(this.allLinks[i]);
                }
            } else {
                this.navLinks = this.navLinks.concat(this.allLinks[i]);
            }
        }
    } else {
        this.navLinks = this.allLinks;
    }
}


  // Session Timeout
  /** Listen for mouse events */
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    if (this.sessionTimeoutFlag && (e.pageX !== this.lastX || e.pageY !== this.lastY)) {
      this.lastX = e.pageX;
      this.lastY = e.pageY;
      this.refreshIdleCookie();
    }
  }

  /** Listen for keypress events */
  @HostListener('document:keypress', ['$event'])
  onKeyPress() {
    if (this.sessionTimeoutFlag) {
      this.refreshIdleCookie();
    }
  }

  /** Start idle timeout feature */
  startIdleTimeCountDown() {
    this.refreshIdleCookie();
    this.ngZone.runOutsideAngular(() => {
      setTimeout(this.checkIdle.bind(this), this.pollInterval); // Check for one second
    });
  }

  /** Refresh idle timeout cookie */
  refreshIdleCookie() {
    if (this.sessionTimeoutFlag) {
      const idleExpireMs = (new Date().getTime() + (this.idleTimeoutMinutes * 60000) - 500);
      sessionStorage.setItem(this.idlelastActionKeyName, idleExpireMs.toString());
    }
  }

  /** Check idle timeout status */
  checkIdle() {
    this.ngZone.run(() => {
      const idleExpireMs = parseInt(sessionStorage.getItem(this.idlelastActionKeyName), 10);
      const idleWarningMsgTime = (idleExpireMs - (this.idleWarningMsgMinutes * 60000) - 500);
      const currTimeMs = new Date().getTime();
      if (currTimeMs > idleExpireMs) {
        this.snackbar.dismiss();
        this.logout();
      } else {
        if ((new Date(currTimeMs).toString() === new Date(idleWarningMsgTime).toString())) {
          this.sessionTimeoutFlag = false;
          this.snackbar.openFromComponent(SessionTimeoutComponent, {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            data: this.warningMsg
          }).onAction().subscribe(data => {
            this.sessionTimeoutFlag = true;
            this.refreshIdleCookie();
          });
        }
        this.ngZone.runOutsideAngular(() => {
          setTimeout(this.checkIdle.bind(this), this.pollInterval); // Check for one second
        });
      }
    });
  }

  logout() {
    this.router.navigate(['logout']); // redirect to Login page
  }
  //  Session Timeout

  /** Check if the browser is IE */
  isIE(): any {
    console.log(window.navigator.userAgent.match(/(MSIE|Trident)/));
    return window.navigator.userAgent.match(/(MSIE|Trident)/);
  }
}
