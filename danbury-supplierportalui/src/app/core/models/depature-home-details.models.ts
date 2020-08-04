import { Address } from './address.model';
/** interface to store departure home details for a candidate */
export interface DepatureHomeDetails {
    /**member variable for departure address*/
    departure: Address;
    /** member variable for ownership status */
    ownerStatus: string;
    /**member variable for housing type*/
    housingType: string;
    /**member variable for number of rooms type*/
    noOfRooms: string;
}
