export interface APIResponse {
    statusCode: number;
    description?: string;
    message?: string;
    candidateID?: string;
    costModelID?: string;
    clientID?: string;
    clientNumber?: string;
    clientContactID?: string;
}

export interface APIResponseDuplicate {
    duplicateStatus: boolean;
    description: string;
    CODE: string;
}
