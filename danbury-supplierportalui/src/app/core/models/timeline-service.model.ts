/**interface for  service Timeline details */
export interface Timeline {
    /**stores serviceName */
    serviceName: string;
    /**stores serviceDesc */
    serviceDesc: string;
    /**stores startDate */
    startDate: string;
    /**stores endDate */
    endDate: string;
    /**stores serviceType */
    serviceType: string;
    /**stores sortOrder */
    sortOrder: number;
    /**stores  isActualAvailable flag status*/
    isActualAvailable: boolean;
}
