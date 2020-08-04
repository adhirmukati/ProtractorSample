import { Candidate } from './candidate';
import { Level } from './level';
import { MovePhase } from './move-phase';

export interface ApprovedMove {
    transfereeId: string;
    candidate?: Candidate;
    authorizedAmt: number;
    status: string;
    lastUpdatedDate: string;
    authorizedBy: string;
    authorizedDate: string;
    latestMilestone: string;
    movePhase: MovePhase[];
    jobStartDate: string;
    remainingAmt: number;
    remainingFormat?: string;
    authorizedAmtFormat?: string;
}

export interface ApprovedMoveDetails {
    totalApprovedMove: number;
    approvedMoves: ApprovedMove[];
}
