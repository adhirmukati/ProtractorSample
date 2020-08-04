import { Component, OnInit, Input } from '@angular/core';
import { CandidateInfo } from '../../../core/models/candidate-info.models';

/**Candidate information component */
@Component({
  selector: 'app-candidate-info',
  templateUrl: './candidate-info.component.html',
  styleUrls: ['./candidate-info.component.scss']
})
export class CandidateInfoComponent implements OnInit {

  /**
   * Stores the candidate details
   */
  @Input() candidateInfo: CandidateInfo;

  businessUnit: string;
  /** Holds the Bussiness Unit data */
  company: string;

  /** Holds the Level Info */
  level: string;
   /** Holds the OrderNumber data */
   orderNumber: string;

   /** Holds the company  */
  orderReference: string;

  /** Injecting the dependencies */
  constructor() { }

  /**
   * To initialise the component
   */
  ngOnInit() {
    this.getContactInfo();
  }

  /**
   * Fetching the Candidate Info and Binding in the HTML
   */
  getContactInfo() {
    this.businessUnit = this.candidateInfo.businessUnit;
    this.level = this.candidateInfo.level;
    this.company = this.candidateInfo.company;
    this.orderNumber = this.candidateInfo.orderNumber;
    this.orderReference = this.candidateInfo.orderReference;
  }

}
