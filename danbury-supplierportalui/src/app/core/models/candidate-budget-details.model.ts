import { CandidateNeedsAssessment } from './candidateneeds-assessment.model';
import { Candidate } from './candidate';
import { ApprovedMove } from './approved-move';
import { Timeline } from './timeline-service.model';
/** interface to store candidate budget details */
export interface CandidateBudgetDetails {
    /** stores core benefits details */
    coreBenefits: CoreSpend;
    /** stores flex benefits details */
    flexSpend: FlexSpend[];
    /** stores core benefits total */
    coreBudgetTotal: number;
    /** stores flex benefits total */
    flexSpendTotal: number;
    /** stores gross up rate */
    grossUpRate: number;
    /** flag for tax is enabled or not */
    isTaxEnabled: boolean;
    /** stores user's move budget */
    UserBudget: number;
    /** stores candidate info */
    candidate: Candidate;
    /** stores needs assessment info */
    needsAssessment: CandidateNeedsAssessment;
    /**stores authorized moves details */
    approvedMoves?: ApprovedMove;
    /**stores authorizedBy information */
    authorizedBy?: string;
    /**stores authorizedDate */
    authorizedDate?: Date;
    /**stores invoiceId */
    invoiceId?: string;
    /**timeline details */
    timelineDetails?: Timeline[];
}
/** base model for budget */
interface Budget {
    /** stores budget name */
    budgetName: string;
    /** stores budget description */
    budgetDesc: string;
    /** stores budget amount */
    budgetAmount?: number;
}
/** base model for flex benefits, extends Budget */
export interface FlexSpend extends Budget {
    /** min value for flex benefit */
    budgetRangeMin: number;
    /** max value for flex benefit */
    budgetRangeMax: number;
}
/** base model for core spend, extends budget */
export interface CoreSpend extends Budget {
    /** insurance amount for core benefit */
    insuranceAmount: number;
    /** bid amount for core benefit */
    bidAmount: number;
}
