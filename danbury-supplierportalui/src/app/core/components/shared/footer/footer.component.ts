import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';
import * as constants from '../../../models/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  /**property to print copyright string */
  readonly copyright = constants.copyright;

  @HostBinding('class') class = 'app-footer';

  constructor() { }

  ngOnInit() {
  }

}
