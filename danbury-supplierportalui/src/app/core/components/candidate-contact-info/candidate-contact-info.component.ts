import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from '../../../core/models/candidate';
import { CandidateContactInfo } from '../../../core/models/candidate-contact-info.model';

/** Candidate Contact Information Component */
@Component({
  selector: 'app-candidate-contact-info',
  templateUrl: './candidate-contact-info.component.html',
  styleUrls: ['./candidate-contact-info.component.scss']
})
export class CandidateContactInfoComponent implements OnInit {
  /**
   * Stores the candidate details
   */
  @Input() candidateContactInfo: CandidateContactInfo;

  /** Holds the candidate name initials */
  candidateInitials: string;
  /** Holds the candidate name*/
  candidateName: string;
  /** Holds the candidate contact number */
  phoneNumber: string;
  /** Holds the candidate emailID */
  emailId: string;

  /** Injecting the dependencies */
  constructor() { }

  /**
   * To initialise the component
   */
  ngOnInit() {
    this.getContactInfo();
  }

  /**
   * Fetching the Candidate Info and Binding the HTML
   */
  getContactInfo() {
    this.candidateInitials =
      this.candidateContactInfo.candidateName[
      this.candidateContactInfo.candidateName.indexOf(
        this.candidateContactInfo.candidateName.split(',')[1].trim()
      )
      ] + this.candidateContactInfo.candidateName[0];

    this.candidateName =
      `${this.candidateContactInfo.candidateName.split(',')[1]} ${this.candidateContactInfo.candidateName.split(',')[0]}`;
    this.emailId = this.candidateContactInfo.emailId;
    this.phoneNumber = this.candidateContactInfo.phoneNumber.toString();
    this.phoneNumber = `(${this.phoneNumber.substring(
      0,
      3
    )}) ${this.phoneNumber.substring(3, 6)}-${this.phoneNumber.substring(
      6,
      10
    )}`;
  }
}
