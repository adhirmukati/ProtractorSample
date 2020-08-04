/** interface to store address data */
export interface Address {
    /** member variable to store full address */
    fullAddress: string;
    /** member variable to store street address */
    streetAddress?: string;
    /** member variable to store city */
    city: string;
    /** member variable to store state */
    state: string;
    /** member variable to store zip code */
    zipcode?: string;
    /** member variable to store country */
    country?: string;
}
