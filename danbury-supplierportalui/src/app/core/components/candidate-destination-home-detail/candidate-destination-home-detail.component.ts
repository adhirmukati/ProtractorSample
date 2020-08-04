import { Component, OnInit, Input } from '@angular/core';
import { DestinationHomeDetails } from '../../models/destination-home-details.model';
import { Address } from "../../models/address.model";

@Component({
  selector: 'app-candidate-destination-home-detail',
  templateUrl: './candidate-destination-home-detail.component.html',
  styleUrls: ['./candidate-destination-home-detail.component.scss']
})
export class CandidateDestinationHomeDetailComponent implements OnInit {

  @Input()
  candidateDestinationInfo: DestinationHomeDetails;
  
  /** stores departure address */
  departureAddress: Address;

  /** stores comments */
  comments: string;
  
  constructor() { }

  ngOnInit() {
    this.departureAddress = this.candidateDestinationInfo.departure;
    this.comments = this.candidateDestinationInfo.comments.trim().length > 0 ? this.candidateDestinationInfo.comments : 'No comments';
  }

}
