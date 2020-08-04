import { Level } from './level';
/** interface to store candidate info */
export interface CandidateInfo {
    /**member variable for level which is of model type Level */
    level: string;
    /**member variable for businessUnit */
    businessUnit: string;
     /**member variable for orderNumber raised for quote request*/
     orderNumber: string;
     /**member variable for company*/
    company?: string;
    orderReference?: string;
}
