import { FlexSpend } from './candidate-budget-details.model';

export interface RelocationOfferInfo {
    candidateFullName: string;
    clientName: string;
    bussinessUnit: string;
    depature: string;
    destination: string;
    coreBudget: string;
    flexBudget: string;
    moveBudget: string;
    totalMoveBuget: string;
    recommendedBudget: string;
    taxinfo: string;
    flexSpend: FlexSpend[];
    taxAmount: string;
}
