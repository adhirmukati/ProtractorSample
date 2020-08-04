import { Location } from './location';
import { Address } from './address.model';

/**interface for Customer model */
export interface Customer {
 /** Customer Id */
  // candidateId: string;
   /** Order Id */
  orderId: string;
  /**member variable for fullName */
  fullname: string;
  /**member variable for departure */
  departure: Address;
  /**member variable for destination */
  destination: Address;
  /**member variable for status */
  status: string;
  /**member variable for emailAddress */
  emailAddress: string;
  /**member variable for phoneNumber */
  phoneNumber: string;
  /**member variable for company */
  company: string;
 /** stores number of rooms */
  noOfRooms: string;
  /** stores type of house */
  housingType: string;
  /** stores number of people */
  noOfPeople: string;
  /** stores expected move start date */
  estimatedMoveStartDate: Date;
  /** stores expected move end date */
  estimatedMoveEndDate: Date;
}

/**interface for Candidate Duplicate Parameter model */
export interface CandidateDuplicateParam {
  /** Client contact Id */
  clientContactId: string;
  /**member variable for departure */
  departureAddress: {
    city: string,
    state: string
  };
  /**member variable for destination */
  destinationAddress: {
    city: string,
    state: string
  };
  /**member variable for emailAddress */
  emailId: string;
  /**member variable for businessUnit */
}

/** enumeration containing status types */
export enum statusType {
  readyForReview = 'Ready for Review',
  pendingVanline = 'Pending Van Line Quote'
}

export interface CandidateProfiles {
  totalActiveCandidate: number;
  candidates: Customer[];
}
