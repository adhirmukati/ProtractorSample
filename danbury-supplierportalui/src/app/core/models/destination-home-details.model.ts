import { Address } from './address.model';
/** interface to store destination home details for a candidate */
export interface DestinationHomeDetails {
    /**member variable for departure address*/
    departure: Address;
    /** member variable for comments */
    comments: string;
}
