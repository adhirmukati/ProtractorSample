import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PermissionsService } from '../../services/permissions.service';
import { AppConfigService } from '../../services/app-config.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly permissionService: PermissionsService,
    private readonly appConfig: AppConfigService

  ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.appConfig.getConfig('byPassAuthorization')) {
        if (!!route && !!route.data && !!route.data.capabilities) {
          this.permissionService.checkAuthorization(route.data.capabilities).then(resp => {
            if (resp) {
              resolve(true);
            } else {
              this.router.navigate(['/logout']);
              resolve(false);
            }
          });
        } else {
          resolve(true);
        }
      } else {
        resolve(true);
      }
    });
  }
}
