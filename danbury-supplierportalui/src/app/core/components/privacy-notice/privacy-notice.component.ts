import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as constants from '../../../core/models/constants';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-notice',
  templateUrl: './privacy-notice.component.html',
  styleUrls: ['./privacy-notice.component.scss']
})
export class PrivacyNoticeComponent implements OnInit {
  /**property to print copyright string */
  readonly copyright = constants.copyright;

   /** Stores the paths for which this component is rendered */
   paths = {
    privacyStatement : 'privacy-statement',
    termsOfUse : 'terms-of-use',
    contactUs : 'contact-us'
  };

  constructor(
    public readonly router: Router,
    public readonly route: ActivatedRoute,
    private readonly titleService: Title) {
    this.route.url.subscribe(url => {
        if (url[0].path === this.paths.privacyStatement) {
          this.titleService.setTitle('Privacy Statement');
        } else if (url[0].path === this.paths.termsOfUse) {
          this.titleService.setTitle('Terms of Use');
        } else if(url[0].path === this.paths.contactUs) {
          this.titleService.setTitle('Contact Us');
        }
    });
  }

  ngOnInit() {
  }

}
