import * as querystring from 'querystring';
import { apiErrorMessage, skipRecordCount } from '../../../models/constants';
import { quoteRequest } from '../../../models/quote-request';
import { FormGroup } from '@angular/forms';
import { Selection } from '../../../models/selection.model';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import {Input,
  Component,
  ChangeDetectorRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  Output,
  EventEmitter,
  SimpleChanges,
  OnDestroy
} from '@angular/core';

import { MatSort, MatPaginator, MatSnackBar, Sort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { NotificationsService } from '../../../services/notifications.service';
import { Subscription } from 'rxjs';
import { Candidate } from '../../../models/candidate';
import { LoggerService } from '../../../services/logger.service';
import { QuoteRequestService } from '../../../services/quote-request.service';
import { EditSupplierContactComponent } from '../edit-supplier-contact/edit-supplier-contact.component';
import { InactiveSupplierContactsComponent } from '../inactive-supplier-contacts/inactive-supplier-contacts.component';

@Component({
  selector: 'app-supplier-contacts-list',
  templateUrl: './supplier-contacts-list.component.html',
  styleUrls: ['./supplier-contacts-list.component.scss']
})
export class SupplierContactsListComponent implements OnInit {
/**variable to store the title */
displayedColumns: string[] = [
  'select',
  'fullName',
  'email',
  'supplier',
  'status'
];
 
//selection = new SelectionModel<any>(true, []);

supplierContactsRequestData: any[] = [
  {fullName: 'Maturity, Matthew', email: 'abc@atlasvanlines.com', supplier: {supplierName:'Atlas Van Lines',supplierId :'1234'}, status:{statusName:'Invitation not sent',date :'2019-10-22'}},
  {fullName: 'Beal, Christopher', email: 'xyz@unitedvanlines.com', supplier: {supplierName:'United Van Lines',supplierId :'1231234'}, status:{statusName:'Active',date :'2020-10-22'}},
  {fullName: 'Aaturity, Matthew', email: 'qwe@usvanlines.com', supplier: {supplierName:'US Van Lines',supplierId :'871234'}, status:{statusName:'Active',date :'2018-09-18'}},
  {fullName: 'Baturity, Matthew', email: 'khkl@northamericanvans.com', supplier: {supplierName:'North American Van Lines',supplierId :'981234'}, status:{statusName:'Active',date :'2019-10-22'}},
  {fullName: 'Laturity, Matthew', email: 'fgdf@atlasvanlines.com', supplier: {supplierName:'Atlas Van Lines',supplierId :'41235'}, status:{statusName:'Invitation sent',date :'2020-07-03'}},
  {fullName: 'Jaturity, Matthew', email: 'asdf@atlasvanlines.com', supplier: {supplierName:'Atlas Van Lines',supplierId :'12134'}, status:{statusName:'Active',date :'2019-11-07'}},
  {fullName: 'Paturity, Matthew', email: 'abc@atlasvanlines.com', supplier: {supplierName:'Atlas Van Lines',supplierId :'71234'}, status:{statusName:'Invitation not sent',date :'2019-10-22'}}

];

/**Form to capture the candidate details */
addCandidateForm: FormGroup;
/**Data source for table */

/**stores the details of candidates */
//ELEMENT_DATA: Candidate[] = [];
ELEMENT_DATA: quoteRequest[] =[];

dataSource = new MatTableDataSource<any>();
/**store the filter value */
filterText = '';
/**to store the rows selected */
selection = new SelectionModel<any>(true, []);

errorMessage = 'We are unable to fetch Quote Request List at this time. Please try again later.';

/** To sort the mat table columns */
@ViewChild(MatSort, { static: false }) set sortOrder(sort: MatSort) {
  if (sort) {
    this.dataSource.sort = sort;
  }
}
/** To paginate in a mat table */
@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
@ViewChild(MatSort,{static:true}) sort: MatSort;
/** Input prop for receiving data*/
@Input() selectedCols: Selection[];
/** store default column for sorting */
sortBy = 'fullName';
/** sorting direction */
sortDir = 'ASC';
/**check if table data is loaded */
isLoaded = false;
/**store levelDetails */
//levelDetails: Level[] = [];
/** Subscription prop for unsubscribing services */
private readonly subscription: Subscription = new Subscription();
/**stores count of active candidates */
initialCount = 0;
/** Stores the client contact ID */
clientContactId: string;
pageInfo = {
  pageSize: 20,
  pageIndex: 0,
  totalCount: 0
};
departureState = 'departure.state';
totalQuoteRequest: string = '0';
/**
 * injecting dependencies
 * @param dialog object for matdialog
 * @param  candidateProfilesService object for CandidateProfileService
 * @param changeDetectorRefs object for changeDetectorRefs object
 * @param snackBar object for snachbar
 * @param datePipe object for datePipe object
 * @param notificationsService object for NotificationsService
 * @param spinner object for spinner
 */
 
  /**
   * Inject dependencies to be used in the component
   * @param dialog -MatDialog object
   * @param notificationsService -Object for NotificationsService
   */
  constructor(
    public dialog: MatDialog,
    private readonly notificationsService: NotificationsService,
    private readonly Logger: LoggerService,
    private readonly quoteRequestService: QuoteRequestService,
    private readonly changeDetectorRefs: ChangeDetectorRef,
    public snackBar: MatSnackBar,
    public datePipe: DatePipe,
    private readonly _router: Router,
    public spinner: NgxSpinnerService
  ) { }

  /**To initialise the component */
  ngOnInit() {
    this.dataSource.data = this.supplierContactsRequestData;
    this.totalQuoteRequest = this.supplierContactsRequestData.length.toString();
  }
   sortData(event) {
    this.sortBy = event.active;
    this.sortDir = event.direction === 'desc' ? 'DESC' : 'ASC';
  }

  /** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected == numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
}

  setNames() {
    this.ELEMENT_DATA.map((element) => {
      element.fullName = (element.forDeliveryTo.names[0].charAt(0).toUpperCase() + element.forDeliveryTo.names[0].slice(1)) + ", " + element.forDeliveryTo.names[1]
    });
  }

  setDestinationAddress() {
    this.ELEMENT_DATA.map((element) => {
      element.destination = (element.destinationCity.charAt(0).toUpperCase() + element.destinationCity.slice(1)) + ", " + element.destinationState
    });
  }

  setDepartureAddress() {
    this.ELEMENT_DATA.map((element) => {
      element.departure = (element.departureCity.charAt(0).toUpperCase() + element.departureCity.slice(1)) + ", " + element.departureState
    });
  }

  getQueryString(_clientContactId, _searchText?, _sortField?, _sortDir?, _skip?, _limit?): string {
    const _queryString = { clientContactId: _clientContactId };
    if (_searchText) { _queryString['searchText'] = _searchText; }
    if (_sortField) { _queryString['sortField'] = _sortField; }
    if (_sortDir) { _queryString['sortDir'] = _sortDir; }
    if (_skip) { _queryString['skip'] = _skip; }
    if (_limit) { _queryString['limit'] = _limit; }
    return querystring.stringify(_queryString);
  }

  /**method to filter column values */
  customFilterPredicate(data, filter): boolean {
    const departure = data.departure ? `${data.departure.state}, ${data.departure.city}` : '';
    const searchTerm = filter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const dataStr =
      `${data.level}
      ${data.destination.state}, ${data.destination.city}${data.fullname}${departure}${data.emailAddress}
      ${data.businessUnit}${data.status}${data.createdBy}${data.phoneNumber}`;
    return dataStr.search(new RegExp(searchTerm, 'gi')) !== -1;
  }

  /**
   * function to get property by path
   * @param obj -object passed
   * @param pathString -path passed
   */
  getPropertyByPath(obj: Object, pathString: string) {
    if (pathString === this.departureState && !obj.hasOwnProperty('departure')) { return null; }
    return pathString.split('.').reduce((o, i) => o[i], obj);
  }

  /**Refresh and detect the changes */
  refresh() {
    this.changeDetectorRefs.detectChanges();
  }

  /**format model for candidate level*/
  formatModels(candidates) {
    for (const candidate of candidates) {
      if (candidate.level) {
        candidate.levelName = candidate.level.split('(')[0];
        candidate.levelDes = candidate.level.replace('(', '#(').split('#')[1];
      }
    }
  }

  /**function for selecting the rows in the table */
  checkboxLabel(row?: Candidate): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${
      this.selection.isSelected(row) ? 'deselect' : 'select'
      } row ${row.fullname + 1}`;
  }

  /**Function to detect the changes */
  public ngOnChanges(changes: SimpleChanges) {
    if ('selectedCols' in changes) {
      const tempStr: string[] = [];
      this.selectedCols.forEach((item, index) => {
        if (this.displayedColumns.indexOf(item.value) < 0) {
          this.displayedColumns.splice(
            this.displayedColumns.length - 1,
            0,
            item.value
          );
        }
      });
      this.displayedColumns.forEach(element => {
        const ind = this.selectedCols.findIndex(col => col.value === element);
        if (ind !== -1) {
          tempStr.push(element);
        }
      });
      this.displayedColumns =
        tempStr.length > 0 ? tempStr : this.displayedColumns;
      if (this.displayedColumns.findIndex(val => val === 'select') < 0) {
        this.displayedColumns.unshift('select');
      }
    }
  }

   /** Open quote request response dialog */
   openEditSupplierContactDialog(isEmptySupplierInfo: boolean, supplierContactDetails?: any): void {
    const dialogRef = this.dialog.open(EditSupplierContactComponent, {
      disableClose: true,
      panelClass: ['dialogMainContainer', 'authorize-dialog-container'],
      data: { isEmptySupplierInfo: isEmptySupplierInfo, supplierContactDetails: supplierContactDetails }
    });
  }
  
  /** Open quote request response dialog */
  inactiveSupplierContacts(): void {
    const dialogRef = this.dialog.open(InactiveSupplierContactsComponent, {
      disableClose: true,
      panelClass: ['dialogMainContainer', 'authorize-dialog-container'],
      data: { selected: this.selection.selected }
    });
    this.subscription.add(
      dialogRef.afterClosed().subscribe(
        result => {
          if (result) {
          }
        })
    );
  }

  /** navigate to Budget Summary of requested candidate*/
  navigateToBudgetSummary(quote: quoteRequest) {
    this._router.navigate(['quote-request/detail'], { 
      state: quote
    });
  }

  navigateToQuoteSummary(quoteId:string){
    this._router.navigate(['quote-summary',quoteId]);
  }

  /**To destroy the subscription */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onPagination(event: any) {
    this.dataSource.paginator = this.paginator;
    // this.pageInfo.pageSize = this.paginator.pageSize;
    // this.loadCandidates(this.paginator.pageSize, this.paginator.pageIndex * this.paginator.pageSize);
  }

}
