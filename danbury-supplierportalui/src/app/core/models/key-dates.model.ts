/** interface to store estimated key dates */
export interface EstimatedKeyDates {
    /** stores estimated pack start date */
    EstimatedPackStartDate: Date;
    /** stores estimated pack end date */
    EstimatedPackEndDate:Date;
    /** stores estimated load start date */
    EstimatedLoadStartDate: Date;
    /** stores estimated load end date */
    EstimatedLoadEndDate: Date;
    /** stores estimated storage in start date */
    EstimatedStorageInStartDate: Date;
    /** stores estimated storage in end date */
    EstimatedStorageInEndDate: Date;
    /** stores estimated storage out start date */
    EstimatedStorageOutStartDate: Date;
    /** stores estimated storage out end date */
    EstimatedStorageOutEndDate: Date;
    /** stores estimated delivery date */
    EstimatedDeliveryDate: Date;   

    EstimatedDeliveryEndDate: Date;
}
/** interface to store actual key dates */
export interface ActualKeyDates {
    /** stores actual pack date*/
    ActualPackDate: Date;
    /** stores actual load date */
    ActualLoadDate: Date;
    /** stores actual storage in date */
    StorageInDate: Date;
     /** stores actual storage out date */
     StorageOutDate: Date;
     /** stores actual delivery date */
     ActualDeliveryDate: Date;
}
