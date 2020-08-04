import { Dates } from "./date.model";

export interface UpdateKeys {
    referenceNumber: string;
    orderAcknowledgementDate: string;
    packDates: Dates;
    loadDates: Dates;
    StorageInDates: Dates;
    StorageOutDates: Dates;
    deliveryDates: Dates;
}