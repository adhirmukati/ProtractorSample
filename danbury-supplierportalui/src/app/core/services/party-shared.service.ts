import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoggedInUserService } from './loggedin-user-service';
import { SupplierProfilesService } from './supplier-profiles.service';

@Injectable({
  providedIn: 'root'
})
export class PartySharedService {

  /** Instance of BehaviorSubject of type String */
  partyId = new BehaviorSubject<string>(null);
  partyDetails;

  /** Instance of BehaviorSubject of type UserRoleCapabilities */
  userRoleCapabilities = new BehaviorSubject<any>(null);
  /** UserRoleCapabilities as Promise */
  userCapabilities;

  /**
   * Base Constructor
   */
  constructor(private readonly loggedInUserService: LoggedInUserService,
    private readonly supplierProfilesService: SupplierProfilesService) {

  }

  updateData(data: string) {
    this.partyId.next(data);
  }

  /**
   * Function to Get party id and update Shared-Service
   */
  async getPartyId() {
    if (!this.partyId.value) {
      const response = await this.loggedInUserService.getLoggedInUserDetails().toPromise();
      if(!response){
        return response;
      }
      this.updateData(response.userId);
      return this.partyDetails = response.userId;
    } else {
      return this.partyDetails = this.partyId.value;
    }
  }

  /**
   * Function to Update the RoleCapabilities subject
   * @param data updated RoleCapabilities
   */
  updateRoleCapabilities(data: any) {
    this.userRoleCapabilities.next(data);
  }

  /**
  * Function to Get User Role Capabilities and update Shared-Service
  */
  async getRoleCapabilities(partyId: string) {
    if (!this.userRoleCapabilities.value) {
      const response = await this.supplierProfilesService.getRoleCapabilities(partyId).toPromise();
      sessionStorage.setItem('roles', response.partyRolesEncrypted);
      const decryptedData = this.getDecryptedData(response);
      this.updateRoleCapabilities(decryptedData);
      return this.userCapabilities = decryptedData;
    } else {
      return this.userCapabilities = this.userRoleCapabilities.value;
    }
  }

  getDecryptedData(data: object): Object {
    const buffer = new Buffer(data['partyRoles'], 'base64');
    const respJson = buffer.toString('ascii');
    return JSON.parse(respJson);
  }

}
