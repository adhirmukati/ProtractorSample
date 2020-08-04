/* interface for Quote Response */
export interface quoteResponse {
  orderRequestId: string,
  quoteRequestId: string,
  referenceNumber: string,
  bidDate: Date,
  bidAmount: string,
  bidAmountCurrency: string,
  bidAmountStorage?: string,
  bidAmountStorageCurrency?: string,
  estimatedWeight: number,
  estimatedWeightUnit: string,
  estimatedDistance: number,
  estimatedDistanceUnit: string,
  moveType :string
  daysInStorage?:number
}
