import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { LogoutComponent } from './core/components/logout/logout.component';
import { PrivacyNoticeComponent } from './core/components/privacy-notice/privacy-notice.component';
import { NonCompatibleComponent } from './core/components/non-compatible/non-compatible.component';
import { FooterComponent } from './core/components/shared/footer/footer.component';
import { AuthGuard } from './core/components/guards/authGuard';
import { WorkOrderListComponent } from './core/components/work-orders/work-order-list/work-order-list.component'
import { QuoteRequestListComponent } from './core/components/quotes/quote-request-list/quote-request-list.component';
import { WorkOrdersDetailsComponent } from './core/components/work-orders/work-orders-details/work-orders-details.component';
import { QuoteRequestDetailComponent } from './core/components/quotes/quote-request-detail/quote-request-detail.component';
import { ExternRouteComponent } from './core/components/shared/extern-route/extern-route.component';
import { SupplierContactsListComponent } from './core/components/supplier-contacts/supplier-contacts-list/supplier-contacts-list.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const supplierContactCapability = 'Supplier Portal Access';
const supplierContactCapabilityAll = 'Supplier Portal Access';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'quotes-request',
    pathMatch: 'full'
  },
  {
    path: 'quotes-request',
    component: QuoteRequestListComponent,
    data: {
      capabilities: [supplierContactCapability,
        supplierContactCapabilityAll]
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'work-orders',
    component: WorkOrderListComponent,
    data: {
      capabilities: [supplierContactCapability,
        supplierContactCapabilityAll]
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'supplier-contacts',
    component: SupplierContactsListComponent,
    data: {
      capabilities: ['Supplier Contact List']
    },
    canActivate: [AuthGuard]
  },  
  {
    path: 'quote-request/detail',
    component: QuoteRequestDetailComponent,
    data: {
      capabilities: [supplierContactCapability,
        supplierContactCapabilityAll]
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'work-order/detail',
    component: WorkOrdersDetailsComponent,
    data: {
      capabilities: [supplierContactCapability,
        supplierContactCapabilityAll]
    },
    canActivate: [AuthGuard]
  },
    {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'externalRedirect',
    resolve: {
      url: externalUrlProvider
    },
    component: ExternRouteComponent
  },
  {
    path: 'privacy-statement',
    component: PrivacyNoticeComponent
  },
  {
    path: 'terms-of-use',
    component: PrivacyNoticeComponent
  },
  {
    path: 'contact-us',
    component: PrivacyNoticeComponent
  },
  {
    path: 'not-supported',
    component: NonCompatibleComponent
  }

];

@NgModule({
  providers: [
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {
        const externalURL = route.paramMap.get('externalUrl');
        window.location.replace(externalURL);
      }
    }
  ],
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
