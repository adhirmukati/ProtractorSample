import { quoteStatus } from './quote-status';
import { Names } from './names';
import { ForDeliveryTo } from './for-delivery-to';
import {orderedBy} from './orderedBy.model';
import { onBehalfOf } from './onBehalf-of';


/** interface to store work order details */
export interface WorkOrder {
    orderedBy:orderedBy;
    status: string;
    departureAddress: string;
    departureCity: string;
    partyName: string;
    departureState: string;
    departurePostalCode: number;
    destinationaddress:	string;
    destinationCity: string;
    destinationState: string;
    destinationPostalCode: string;
    orderDate?:Date;  
    preferredEmailAddress: string;
    preferredPhoneNumber: string;
    estMoveStartDate: Date;
    estMoveEndDate: Date;
    company:string;
    agentName:string;
    onBehalfOf:onBehalfOf;
    orderAcknowledgementDate:Date;
    workOrderStatusDate:Date;

}
