import { Address } from './address.model';
/**interface for CandidateNeedsAssessment */
export interface CandidateNeedsAssessment {
  /** Prop for Candidate Id */
  candidateId: string;
  /**object of type FamilyDetails */
  familyDetails: FamilyDetails;
  /**object of type Departure Address */
  departureAddr: Address;
  /**object of type Destination Address */
  destinationAddr: Address;
  /**object of type Residence details */
  residenceDetails: ResidenceDetails;
  /**variable contact number of type number */
  contactNumber: string;
  /**variable estimatedMoveDate of type string */
  estimatedMoveStartDate: string;
  /**variable estimatedEndDate of type string */
  estimatedMoveEndDate: string;
}

/**interface for FamilyDetails */
export interface FamilyDetails {
  /**variable for relocation status of type string */
  familyRelocationStatus: string;
  /**variable for noOfRelocatePeople of type string */
  noOfRelocatePeople: string;
}

/**interface for Residence Details */
export interface ResidenceDetails {
  /**variable for ownerStatus of type string */
  ownerStatus: string;
  /**variable for homeType of type string */
  homeType: string;
  /**variable for noOfRooms of type string */
  noOfRooms: number;
}
