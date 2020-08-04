import * as querystring from 'querystring';
import { apiErrorMessage, skipRecordCount } from '../../../../core/models/constants';
import { quoteRequest } from '../../../../core/models/quote-request';
import { FormGroup } from '@angular/forms';
import { Selection } from '../../../../core/models/selection.model';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  Input,
  Component,
  ChangeDetectorRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  Output,
  EventEmitter,
  SimpleChanges,
  OnDestroy,
  ElementRef
} from '@angular/core';

import { MatSort, MatPaginator, MatSnackBar, Sort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { NotificationsService } from '../../../../../../src/app/core/services/notifications.service';
import { Subscription, fromEvent } from 'rxjs';
import { Candidate } from '../../../../core/models/candidate';
import { LoggerService } from '../../../../core/services/logger.service';
import { QuoteRequestService } from '../../../services/quote-request.service';
import { QuoteRequestListColumnPopUpComponent } from '../quote-request-list/quote-request-list-column-pop-up/quote-request-list-column-pop-up.component';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
// import { LoggedInUserService } from '../../../../core/services/loggedin-user-service';

@Component({
  selector: 'app-quote-request-list',
  templateUrl: './quote-request-list.component.html',
  styleUrls: ['./quote-request-list.component.scss']
})
export class QuoteRequestListComponent implements OnInit, OnDestroy {

  /**variable to store the title */
  displayedColumns: string[] = [
    'fullName',
    'orderReference',
    'departure',
    'destination',
    'quoteStatusDate'
  ];
  columnList: string[] = [
    'fullName',
    'orderReference',
    'departure',
    'destination',
    'preferredEmailAddress',
    'preferredPhoneNumber',
    'company',
    'quoteStatusDate'
  ];

  /**searchInputElem reference */
  @ViewChild('searchInputElem', { static: false }) searchInputElem: ElementRef;
  /**keyup event subscription for searchInputElem */
  private keyupSubscription: Subscription;

  /**Form to capture the candidate details */
  addCandidateForm: FormGroup;
  /**Data source for table */

  /**stores the details of candidates */
  ELEMENT_DATA: quoteRequest[] = [];


  dataSource = new MatTableDataSource<any>();
  /**store the filter value */
  filterText = '';
  /**to store the rows selected */
  selection = new SelectionModel<Candidate>(true, []);

  errorMessage = 'We are unable to fetch Quote Request List at this time. Please try again later.';

  /** spinner for search */
  showSpinner = false;

  /** for accessibility */
  announceStmt: string;

  /*variable for clear button*/
  value = '';


  /** To sort the mat table columns */
  @ViewChild(MatSort, { static: false }) set sortOrder(sort: MatSort) {
    if (sort) {
      this.dataSource.sort = sort;
    }
  }
  /** To paginate in a mat table */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  /** Input prop for receiving data*/
  @Input() selectedCols: Selection[];
  /** store default column for sorting */
  sortBy = 'quoteStatusDate';
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
  totalQuoteRequest: string;
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


  ngAfterViewInit(){
    this.keyupSubscription = fromEvent(this.searchInputElem.nativeElement, 'input')
    .pipe(
      debounceTime(1000),
      map((event:Event)=>(<HTMLInputElement>event.target).value),
      distinctUntilChanged(),
      switchMap(searchTerm => {
        this.filterText = searchTerm.trim();
        this.spinner.show();
        if (this.filterText && this.filterText.length >= 2) {
          this.paginator.pageIndex = skipRecordCount;
          return this.quoteRequestService.getAllQuoteRequests(this.filterText);
        } else if (this.filterText === '') {
          this.paginator.pageIndex = skipRecordCount;
          return this.quoteRequestService.getAllQuoteRequests(this.filterText);
        }
      })
    ).subscribe(
      data => {
         
        this.ELEMENT_DATA = data;
        this.dataSource.data = this.ELEMENT_DATA;
        
        this.setNames();
        this.setDepartureAddress();
        this.setDestinationAddress();
        this.setCompany();
    
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sortOrder;
        this.totalQuoteRequest = data.length.toString();
        this.spinner.hide();
      },
      (err) => {
        this.spinner.hide();
        console.log('HTTP Error', err);
        this.notificationsService.flashNotification(
          'error',
          err.message,
          true,
          'dismiss'
        );
      }
    )
  }

  loadQuoteRequests() {
    this.spinner.show();
    this.quoteRequestService.getAllQuoteRequests(this.filterText).subscribe(
      (data) => {
        this.ELEMENT_DATA = data;
        this.dataSource.data = this.ELEMENT_DATA;

        this.setNames();
        this.setDepartureAddress();
        this.setDestinationAddress();
        this.setCompany();

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sortOrder;
        this.totalQuoteRequest = data.length.toString();
        this.spinner.hide();
      },
      (err) => {
        this.spinner.hide();
        console.log('HTTP Error', err);
        this.notificationsService.flashNotification(
          'error',
          err.message,
          true,
          'dismiss'
        );
      }
    );
  }
  /** Method to open column selection dialog**/
  openTableOptions() {
    let dialogRef = this.dialog.open(QuoteRequestListColumnPopUpComponent, {
      disableClose: true,
      panelClass: ['dialogMainContainer'],
      data: this.displayedColumns
    });
    this.subscription.add(
      dialogRef.componentInstance.columnsListUpdated.subscribe(
        (result: Selection[]) => {

          this.selectedCols = result;
          this.updateTable();
        })
    );

  }
  /** This method is to update the table display columns based on column selection**/
  updateTable(): void {

    this.displayedColumns = Object.assign([], this.columnList);

    this.columnList.forEach((item, index) => {
      let checkedvalue = this.selectedCols.some(val => {
        return val.value === item;
      })
      if (!checkedvalue) {
        let itemIndex = this.displayedColumns.findIndex(x => x === item);
        this.displayedColumns.splice(itemIndex, 1);
      }

    })

  }
  /**To initialise the component */
  ngOnInit() {
    this.loadQuoteRequests();
  }
  sortData(event) {
    this.sortBy = event.active;
    this.sortDir = event.direction === 'desc' ? 'DESC' : 'ASC';
  }

  setNames() {
    this.ELEMENT_DATA.map((element) => {
      element.fullName = (element.forDeliveryTo.names[0].charAt(0).toUpperCase() + element.forDeliveryTo.names[0].slice(1)) + ", " + element.forDeliveryTo.names[1]
    });
  }

  setDestinationAddress() {
    this.ELEMENT_DATA.map((element) => {
      element.destination = element.destinationState + ", " + (element.destinationCity.charAt(0).toUpperCase() + element.destinationCity.slice(1))
    });
  }

  setCompany() {
    this.ELEMENT_DATA.map((element) => {
      element.company = (element.onBehalfOf.preferredName && element.onBehalfOf.preferredName != '') ? element.onBehalfOf.preferredName : element.onBehalfOf.entityName;
    })
  }

  setDepartureAddress() {
    this.ELEMENT_DATA.map((element) => {
      element.departure = element.departureState + ", " + (element.departureCity.charAt(0).toUpperCase() + element.departureCity.slice(1))
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

  /** Method to check if all the rows in the mat table were selected*/
  isAllSelected(): boolean {
    if (this.ELEMENT_DATA.length > 0) {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  }

  /** Method to toggle select all or clear all for rows inside in the mat table */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
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

  /** navigate to Budget Summary of requested candidate*/
  navigateToBudgetSummary(quote: quoteRequest) {
    this._router.navigate(['quote-request/detail'], {
      state: quote
    });
  }

  navigateToQuoteSummary(quoteId: string) {
    this._router.navigate(['quote-summary', quoteId]);
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

  resetList(filterValue: string) {
    filterValue = '';
    this.value = '';
    this.filterText = filterValue.trim();
    if (this.filterText === '') {
      this.paginator.pageIndex = skipRecordCount;
      this.loadQuoteRequests();
    }
  }

}
