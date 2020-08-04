import { quoteStatus } from './quote-status';
import { Names } from './names';
import { ForDeliveryTo } from './for-delivery-to';
import { DeliveryTo } from './deliveryTo.model';
import {onBehalfOf} from './onBehalf-of';

/** interface to store quote request details */
export interface quoteRequest {
    //temprory attributes start
    fullName: string;
    order: string;
    departure: string;
    destination: string;
    status: quoteStatus;
    forDeliveryTo: DeliveryTo;
    destinationCity: string;
    destinationState: string;
    departureCity: string;
    departureState: string;
    onBehalfOf:onBehalfOf;
    company:string;
    //temprory attributes end
//     onBehalfOf: Names;

//     applicationSource: string;

//     orderRequestId: string;
//     quoteRequestId: string;
//     orderDate: Date;
//     quoteRequestDate: Date;

//     requestedBy: Names;

//     forDeliveryTo: ForDeliveryTo;

//     departureAddress: string;
//     departureCity: string;
//     departureState: string;
//     departurePostalCode: number;
//     destinationaddress:	string;
//     destinationCity: string;
//     destinationState: string;
//     destinationPostalCode: string;
//     numberOfPeopleMoving: number;
//     numberRooms: number;
//     propertyType: string;
//     ownRent: string;
//     preferredEmailAddress: string;
//     preferredPhoneNumber: string;
//     estMoveStartDate: Date;
//     estMoveEndDate: Date;
}
