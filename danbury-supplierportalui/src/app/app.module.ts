import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  HashLocationStrategy,
  LocationStrategy,
  DatePipe
} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatExpansionModule,
  MatMenuModule,
  MatIconModule,
  MatCheckboxModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatToolbarModule,
  MatListModule,
  MatStepperModule,
  MatRadioModule,
  MatGridListModule,
  MatProgressBarModule,
  MatDatepicker,
  MatSnackBarModule,
  MatDatepickerModule
} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { HighlightSearchPipe } from './core/pipes/highlight-search.pipe';
import { SessionPopUpComponent } from './core/components/session-pop-up/session-pop-up.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { LogoutComponent } from './core/components/logout/logout.component';
import { SessionTimeoutComponent } from './core/components/session-timeout/session-timeout.component';
import { PrivacyNoticeComponent } from './core/components/privacy-notice/privacy-notice.component';
import { NonCompatibleComponent } from './core/components/non-compatible/non-compatible.component';
import { FooterComponent } from './core/components/shared/footer/footer.component';
import { CandidateContactInfoComponent } from './core/components/candidate-contact-info/candidate-contact-info.component';
import { CandidateInfoComponent } from './core/components/candidate-info/candidate-info.component';
import { CandidateMoveInfoComponent } from './core/components/candidate-move-info/candidate-move-info.component';
import { WorkOrderListComponent } from './core/components/work-orders/work-order-list/work-order-list.component';
import { OverlayTooltipComponent } from './core/components/shared/overlay-tooltip/overlay-tooltip.component';
import { ExternRouteComponent } from './core/components/shared/extern-route/extern-route.component';
import { InputPhoneFormatDirective } from './core/directives/input-phone-format.directive'

import {
  CandidateDepartureHomeDetailComponent
} from './core/components/candidate-departure-home-detail/candidate-departure-home-detail.component';
import { MaterialModule } from './material/material.module';
import {AgentInformationComponent} from './core/components/work-orders/work-orders-details/agent-information/agent-information.component'
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatPaginatorModule,
  MatTabsModule,
  MatSortModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatNativeDateModule,
  MatDividerModule
} from '@angular/material';
import { FilterModalComponent } from './core/components/filter-modal/filter-modal.component';
import { QuoteRequestListComponent } from './core/components/quotes/quote-request-list/quote-request-list.component';
import { QuoteRequestDetailComponent } from './core/components/quotes/quote-request-detail/quote-request-detail.component';
import { WorkOrdersDetailsComponent } from './core/components/work-orders/work-orders-details/work-orders-details.component';
import { QuoteResponseComponent } from './core/components/quotes/quote-response/quote-response.component';
import { EditKeysComponent } from './core/components/edit-keys/edit-keys.component';
import { CandidateDestinationHomeDetailComponent } from './core/components/candidate-destination-home-detail/candidate-destination-home-detail.component';
import { SupplierContactsListComponent } from './core/components/supplier-contacts/supplier-contacts-list/supplier-contacts-list.component';
import { EditSupplierContactComponent } from './core/components/supplier-contacts/edit-supplier-contact/edit-supplier-contact.component';
import { InactiveSupplierContactsComponent } from "./core/components/supplier-contacts/inactive-supplier-contacts/inactive-supplier-contacts.component";
import { QuoteRequestListColumnPopUpComponent } from './core/components/quotes/quote-request-list/quote-request-list-column-pop-up/quote-request-list-column-pop-up.component';
import { AmountFormatDirective } from './core/directives/amount-format.directive';
import { CandidateQuoteInfoComponent } from './core/components/candidate-quote-info/candidate-quote-info.component';
import { WorkOrderListColumnPopUpComponent } from './core/components/work-orders/work-order-list/work-order-list-column-pop-up/work-order-list-column-pop-up.component';
import { CandidateAgentInfoComponent } from './core/components/candidate-agent-info/candidate-agent-info.component';

@NgModule({
  declarations: [AppComponent,
    SessionPopUpComponent,
    HighlightSearchPipe,
    LogoutComponent, SessionTimeoutComponent,
    PrivacyNoticeComponent,
    NonCompatibleComponent,    
    FooterComponent,
    CandidateContactInfoComponent,
    CandidateInfoComponent,
    CandidateMoveInfoComponent,
    CandidateDepartureHomeDetailComponent,
    WorkOrderListComponent,
    ExternRouteComponent,
    OverlayTooltipComponent,
    InputPhoneFormatDirective,
    FilterModalComponent,
    QuoteRequestListComponent,
    QuoteRequestDetailComponent,
    WorkOrdersDetailsComponent,
    QuoteResponseComponent,
    EditKeysComponent,
    AgentInformationComponent,
    CandidateDestinationHomeDetailComponent,
    SupplierContactsListComponent,
    EditSupplierContactComponent,
    InactiveSupplierContactsComponent,
    QuoteRequestListColumnPopUpComponent,
    AmountFormatDirective,
    CandidateQuoteInfoComponent,
    WorkOrderListColumnPopUpComponent,
    CandidateAgentInfoComponent
    ],
  imports: [
    OAuthModule.forRoot(),
    NgIdleKeepaliveModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,    
    MatCheckboxModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatCardModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSortModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDividerModule,
    MaterialModule,
    NgxSpinnerModule,
    AppRoutingModule, // I must be last!! https://angular.io/guide/router#module-import-order-matters
    MatSlideToggleModule,
    ServiceWorkerModule.register(
      'ngsw-worker.js', { enabled: environment.production }
    ) // I must be last!! https://angular.io/guide/router#module-import-order-matters
  ],
  entryComponents: [
    SessionTimeoutComponent, QuoteResponseComponent, FilterModalComponent, EditKeysComponent, AgentInformationComponent,
    EditSupplierContactComponent, InactiveSupplierContactsComponent,QuoteRequestListColumnPopUpComponent,WorkOrderListColumnPopUpComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    HighlightSearchPipe,
    DatePipe,
    CookieService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
