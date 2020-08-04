import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppConfigService } from '../../../core/services/app-config.service';
import {LoggerService} from '../../../core/services/logger.service';
import { LoggedInUserService } from '../../../core/services/loggedin-user-service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly cookieService: CookieService,
    private readonly appConfig: AppConfigService,
    private readonly Logger: LoggerService,
    private readonly loggedInUserService: LoggedInUserService
  ) { }

  ngOnInit() {
    // Remove Session timeout Item
    sessionStorage.removeItem('lastAction');
    // Remove Cartus session cookie
    if (document.location.hostname === 'localhost') {
      this.cookieService.delete('car-ses-tok');
      this.cookieService.delete('car-ses-time');
    } else {
      this.cookieService.delete('car-ses-tok', '/', '.cartus.com');
      this.cookieService.delete('car-ses-time', '/', '.cartus.com');
    }
    sessionStorage.clear();
    const logoutURL = this.appConfig.getConfig('logout') ;
    this.router.navigate(['/externalRedirect', { externalUrl: logoutURL }], {
      skipLocationChange: true
    });
    this.loggedInUserService.getLoggedInUserDetails()
    .subscribe(response => {
      const userId: any = response.name.replace(/ .*/, '');
      this.Logger.activityAudit('ACTIVITY', userId, 'SP-LOGOUT', 'LOGOUT');
    });

  }
}
