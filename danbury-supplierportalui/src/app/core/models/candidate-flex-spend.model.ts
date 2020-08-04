import { FlexSpend } from './candidate-budget-details.model';
/** interface to store candidate flex benefits  */
export interface CandidateFlexSpend {
    /** stores array of flex spend */
    flexSpend: FlexSpend[];
    /** stores flex spend total */
    flexSpendTotal: number;
}
