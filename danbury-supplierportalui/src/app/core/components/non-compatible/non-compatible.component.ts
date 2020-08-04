import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as constants from '../../../core/models/constants';

@Component({
  selector: 'app-non-compatible',
  templateUrl: './non-compatible.component.html',
  styleUrls: ['./non-compatible.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NonCompatibleComponent implements OnInit {
  /**property to print copyright string */
  readonly copyright = constants.copyright;

  constructor() { }

  ngOnInit() {
  }

}
