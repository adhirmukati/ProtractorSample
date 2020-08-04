import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DepatureHomeDetails } from '../../models/depature-home-details.models';
import { Address } from '../../../core/models/address.model';

/**base component for candidate departure home details */
@Component({
  selector: 'app-candidate-departure-home-detail',
  templateUrl: './candidate-departure-home-detail.component.html',
  styleUrls: ['./candidate-departure-home-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CandidateDepartureHomeDetailComponent implements OnInit {
  /** gets departure home details as input from parent component */
  @Input() candidateDepartureInfo: DepatureHomeDetails;

  /** stores ownership status */
  ownerType: string;

  /** stores house type */
  housingType: string;

  /** stores departure address */
  departureAddress: Address;

  /** stores number of rooms */
  noOfRooms: string;

  /**base constructor */
  constructor() { }

  /**function to be called on init of component */
  ngOnInit() {
    if (this.candidateDepartureInfo.ownerStatus && this.candidateDepartureInfo.ownerStatus.toLowerCase() === 'own') {
      this.ownerType = 'Owns';
    } else if (this.candidateDepartureInfo.ownerStatus && this.candidateDepartureInfo.ownerStatus.toLowerCase() === 'rent') {
      this.ownerType = 'Rented';
    }
    this.housingType = this.candidateDepartureInfo.housingType;
    this.departureAddress = this.candidateDepartureInfo.departure;
    this.noOfRooms = this.candidateDepartureInfo.noOfRooms;
  }

}
