import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { quoteResponse } from '../../models/quote-response.model';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-candidate-quote-info',
  templateUrl: './candidate-quote-info.component.html',
  styleUrls: ['./candidate-quote-info.component.scss']
})
export class CandidateQuoteInfoComponent implements OnInit, OnChanges {
/**
   * Stores the candidate details
   */
  @Input() quoteResponse: quoteResponse;

  quoteResponseInfo:quoteResponse;
  /**Hold the vaneLine cost with formatted value and its Units */
  vaneLineCost:string="";
  /**Hold the estimated Weight with formatted value and its Units */
  estimatedWeight:string="";
  /**Hold the estimated Distance with formatted value and its Units */
  estimatedDistance:string="";
  /**Hold the storage cost with formatted value and its Units */
  storageCost:string;
  /**Hold the days in Storage with formatted value and its Units */
  daysInStorage:string;
  /**Hold for Unit of distance */
  distanceUnit ="Miles";
  /**Hold for Unit of weight */
  weightUnit ="Lb";
  /**Hold for MoveType */
  moveType:string="";

  
  constructor() { }
  ngOnChanges(): void {
    this.setQuoteInfo();
  }

  ngOnInit() {
    this.setQuoteInfo();    
  }

  

  setQuoteInfo(){
    this.quoteResponseInfo= this.quoteResponse;  
    this.moveType= `${this.quoteResponseInfo.moveType.charAt(0).toUpperCase()}${this.quoteResponseInfo.moveType.slice(1)}`;
    this.vaneLineCost = `${this.formatNumber(this.quoteResponseInfo.bidAmount)} ${this.quoteResponseInfo.bidAmountCurrency}`;
    if(this.quoteResponseInfo.estimatedDistance){
    this.estimatedDistance = `${this.formatNumber(this.quoteResponseInfo.estimatedDistance)} ${this.distanceUnit}`;
    }
    if(this.quoteResponseInfo.estimatedWeight){
      this.estimatedWeight = `${this.formatNumber(this.quoteResponseInfo.estimatedWeight)} ${this.weightUnit}`;
    }
    
    this.setStorageDetails();
  }

  setStorageDetails(){
    if(this.quoteResponseInfo.bidAmountStorage)
    {
      this.storageCost = `${this.formatNumber(this.quoteResponseInfo.bidAmountStorage)} ${this.quoteResponseInfo.bidAmountStorageCurrency}`;
      this.daysInStorage = this.formatNumber(this.quoteResponseInfo.daysInStorage);
    }
  }

  formatNumber(value){
    if(value){
      return formatNumber(Math.ceil(value), 'en-US');
    }
    else {
      return "";
    }
  }
  

}
