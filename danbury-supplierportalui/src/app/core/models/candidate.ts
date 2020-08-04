import { Level } from './level';
import { Location } from './location';
import { Address } from './address.model';

/**interface for Candidate model */
export interface Candidate {
  /** Candidate Id */
  candidateId: string;
  /**member variable for fullName */
  fullname: string;
  /**member variable for level which is of model type Level */
  level: string;
  /**member variable for departure */
  departure: Address;
  /**member variable for destination */
  destination: Address;
  /**member variable for status */
  status: string;
  /**member variable for isAssessmentReceived */
  isAssessmentReceived?: boolean;
  /**member variable for emailAddress */
  emailAddress: string;
  /**member variable for phoneNumber */
  phoneNumber: string;
  /**member variable for businessUnit */
  businessUnit: string;
  /**member variable for invitationSentDate */
  invitationSentDate: string;
  /**member variable for createdDate */
  createdDate: string;
  /**member variable for createdBy */
  createdBy: string;
  /**member variable for lastUpdatedDate */
  lastUpdatedDate: string;
  /** stores number of rooms */
  noOfRooms: string;
  /** stores type of house */
  housingType: string;
  /** stores number of people */
  noOfPeople: string;
  /** flag to check if candidate is duplicate or not */
  validateDuplicateCheck?: boolean;
  /** variable to check executed function type */
  executedFunctionType?: string;
  /** candiate's country telephonic code */
  countryDialingCode: string;
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
  candidates: Candidate[];
}
