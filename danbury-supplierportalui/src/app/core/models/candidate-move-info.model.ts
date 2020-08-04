import { Address } from './address.model';
/** interface to represent move info for the candidate  */
export interface CandidateMoveInfo {
    /**member variable for departure Address*/
    departure: Address;
    /**member variable for destination Address*/
    destination: Address;
    /** Holds the total Number Of People */
    totalNumberOfPeople: string;
    /**variable estimated start Move Date of type string */
    estimatedMoveStartDate: string;
    /**variable estimated end Move Date of type string */
    estimatedMoveEndDate: string;
}

