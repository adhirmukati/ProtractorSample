import { Injectable, Inject } from '@angular/core';
import { Observable, of, Subject, Subscription } from 'rxjs';
// import { CandidateProfilesService } from './quotes-request.service';
import { isNullOrUndefined } from 'util';
import { LoggedInUserService } from './loggedin-user-service';
import { PartySharedService } from './party-shared.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  private roleCapability: any;
  private readonly encryptedResponse: any;
  private readonly subscription: Subscription = new Subscription();


  constructor(
    // private readonly candidateProfilesService: CandidateProfilesService,
    private readonly loggedInUserService: LoggedInUserService,
    private readonly partySharedService: PartySharedService
  ) {

  }

  public async checkAuthorization(path: any) {
    const partyId = await this.partySharedService.getPartyId();
    this.roleCapability = await this.partySharedService.getRoleCapabilities(partyId);
    return this.doCheckAuthorization(path);
  }

  private doCheckAuthorization(path: any): boolean {
    const keys = this.parsePath(path);
    let result = true;
    if (keys.length > 0) {
      result = false;
    }
    if (!!this.roleCapability && !!this.roleCapability.roleCapabilities && this.roleCapability.roleCapabilities.length > 0) {
      for (const pathValue of keys) {
        for (const capability of this.roleCapability.roleCapabilities) {
          for (const capabilityValue of capability.capabilities) {
            if (pathValue === capabilityValue.name) {
              return true;
            }
          }
        }
      }
    }
    return result;
  }

  private parsePath(path: any): string[] {
    if (typeof path === 'string') {
      return path.split('.');
    }
    if (Array.isArray(path)) {
      return path;
    }
    return [];
  }
}
