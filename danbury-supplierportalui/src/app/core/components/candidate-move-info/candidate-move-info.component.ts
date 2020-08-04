import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { CandidateMoveInfo } from '../../models/candidate-move-info.model';
/**base component for candidate move info details */
@Component({
  selector: 'app-candidate-move-info',
  templateUrl: './candidate-move-info.component.html',
  styleUrls: ['./candidate-move-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CandidateMoveInfoComponent implements OnInit {

  /**
   * Stores the candidate details
   */
  @Input() candidateMoveInfo: CandidateMoveInfo;

  /** Holds the destination Address */
  destinationAdd: string;

  /** Holds thedeparture Address */
  departureAdd: string;

  /** Holds the total Number Of People */
  totalNumberOfPeople: string;

  /**variable estimated start Move Date of type string */
  estimatedMoveStartDate: string;

  /**variable estimated end Move Date of type string */
  estimatedMoveEndDate: string;

  /**base constructor */
  constructor() { }

  /** function to be called on init */
  ngOnInit() {
    this.departureAdd = this.candidateMoveInfo.departure.fullAddress;
    this.destinationAdd = this.candidateMoveInfo.destination.fullAddress;
    this.totalNumberOfPeople = this.getNoOfPeople(this.candidateMoveInfo.totalNumberOfPeople);
    this.estimatedMoveStartDate = this.candidateMoveInfo.estimatedMoveStartDate;
    this.estimatedMoveEndDate = this.candidateMoveInfo.estimatedMoveEndDate;
  }

  getNoOfPeople(totalPep){
    this.totalNumberOfPeople = totalPep;
    totalPep = Number(this.totalNumberOfPeople);
    if(totalPep >= 4){
      return "4+";
    } 
    return this.totalNumberOfPeople;
  }
}
