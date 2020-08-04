import { NgxSpinnerService } from 'ngx-spinner';
import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectorRef, 
  OnDestroy,
} from '@angular/core';
import { MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Selection } from '../../../../core/models/selection.model';
import { Subscription, Subject } from 'rxjs';
import { NotificationsService } from '../../../../core/services/notifications.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { LoggerService } from '../../../../core/services/logger.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FilterModalComponent } from '../../filter-modal/filter-modal.component';
import { WorkOrderService } from '../../../services/work-order.service';
import {WorkOrder} from '../../../models/work-order.model'
import { WorkOrderListColumnPopUpComponent } from './work-order-list-column-pop-up/work-order-list-column-pop-up.component';
import { skipRecordCount } from 'src/app/core/models/constants';

/**Class for WorkOrderDetailsComponent */
@Component({
  selector: 'app-work-order-list',
  templateUrl: './work-order-list.component.html',
  styleUrls: ['./work-order-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class WorkOrderListComponent implements OnInit, OnDestroy {
  /**stores the details of work order */
 workOrder: WorkOrder;
 workOrderSubscription : Subscription;
 workOrders : WorkOrder[]=[];
 /**Data source for table */
 dataSource: MatTableDataSource<WorkOrder>;

  /**variable to store the title */
  displayedColumns: string[] = [
    'partyName',
    'orderReference',
    'departureState',
    'destinationState',
    'workOrderStatusDate'
  ];
  columnList: string[] = [
    'partyName',
    'orderReference',
    'departureState',
    'destinationState',
    'preferredEmailAddress',
    'preferredPhoneNumber',
    'company',
    'bookedWithContactName',
    'workOrderStatusDate'
  ];
  selectedCols: Selection[];
   /** To sort the mat table columns */
   @ViewChild(MatSort, { static: false }) set sortOrder(sort: MatSort) {
    if (sort) {
      this.dataSource.sort = sort;
    }
  }
  /** To paginate in a mat table */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;  
  private searchterms= new Subject<string>();
   /** store default column for sorting */
  sortBy = 'workOrderStatusDate';
  /** sorting direction */
  sortDir = 'ASC';
  /**check if table data is loaded */
  isLoaded = false;
  totalWorkOrder: string;
  /**store levelDetails */
  // levelDetails: Level[] = [];
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
  errorMessage = 'We are unable to fetch Work Order List at this time. Please try again later.';

  /**store the filter value */
  filterText = '';
 
  filterDialogRef: MatDialogRef<FilterModalComponent>; 
  /**
   * injecting dependencies
   * @param dialog object for matdialog
   * @param  candidateProfilesService object for CandidateProfileService
   * @param changeDetectorRefs object for changeDetectorRefs object
   * @param snackBar object for snachbar
   * @param datePipe object for datePipe object

   * @param spinner object for spinner

   */
  constructor(
    public dialog: MatDialog,
    private readonly workOrderService: WorkOrderService,
    private readonly changeDetectorRefs: ChangeDetectorRef,
    public snackBar: MatSnackBar,
    public datePipe: DatePipe,
    private readonly _router: Router,
    public spinner: NgxSpinnerService,
    private readonly Logger: LoggerService,
    private readonly notificationsService: NotificationsService
  ) {

  }


  loadWorkOrders(pageSize:number=20,skipRecords:number=0){
    this.spinner.show();
    this.workOrderSubscription= this.workOrderService.getAllWorkOrders(this.filterText,skipRecords,pageSize).subscribe(
      data => {
        this.workOrders = data.workOrders;
        this.workOrders.forEach((workOrder: WorkOrder)=> {
          workOrder.partyName = workOrder.orderedBy.partyName.names[0].charAt(0).toUpperCase() + workOrder.orderedBy.partyName.names[0].slice(1);
          workOrder.destinationCity = workOrder.destinationCity.charAt(0).toUpperCase() + workOrder.destinationCity.slice(1);
          workOrder.departureCity = workOrder.departureCity.charAt(0).toUpperCase() + workOrder.departureCity.slice(1);
          workOrder.company = (workOrder.onBehalfOf.preferredName)?workOrder.onBehalfOf.preferredName:((workOrder.onBehalfOf.entityName?workOrder.onBehalfOf.entityName:`-`));               
          workOrder.workOrderStatusDate = (workOrder.workOrderStatusDate)?(workOrder.workOrderStatusDate):workOrder.orderAcknowledgementDate;
        });
        setTimeout(() => {
          this.paginator.length = data.totalWorkOrders;         
          
        });
        this.dataSource = new MatTableDataSource(this.workOrders);        
        this.dataSource.sort = this.sortOrder;
        this.totalWorkOrder = data.totalWorkOrders.toString();
        this.spinner.hide();
    },
      err => {
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




  /**To initialize the component */
  ngOnInit() {
    this.loadWorkOrders();
    this.subscribeTosearchTerm();
  }
  subscribeTosearchTerm(){
    this.searchterms.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((text)=>{
      
      if(text.length>=2){
        this.paginator.pageIndex=skipRecordCount;
        this.loadWorkOrders(this.paginator.pageSize);
      }
      else{
        this.loadWorkOrders(this.paginator.pageSize,this.paginator.pageIndex*this.paginator.pageSize);
      }
    });
  }
  applyFilter(searchTerm){
    if(searchTerm.length>=2){
      this.searchterms.next(searchTerm);
    }
    else{
      this.searchterms.next('');
    }
    
  } 

  sortData(event) {    
    this.sortBy = event.active;
    this.sortDir = event.direction === 'desc' ? 'DESC' : 'ASC';
  
  }

  /**Refresh and detect the changes */
  refresh() {
    this.changeDetectorRefs.detectChanges();
  }

  /** navigate to work order details of requested work order*/
  navigateToWorkOderDetails(workOrder: WorkOrder) {
    this._router.navigate(['work-order/detail'], {
      state: workOrder
    });
  }

  /**
   * destroys the object
   */
  ngOnDestroy() {
    this.workOrderSubscription.unsubscribe();
  }

  onPagination(event: any) {      
    this.pageInfo.pageSize = this.paginator.pageSize;
    this.pageInfo.totalCount= this.paginator.length;     
     
     this.loadWorkOrders(this.paginator.pageSize, this.paginator.pageIndex * this.paginator.pageSize); 
  }

   /** Method to open column selection dialog**/
   openTableOptions(){
    let dialogRef = this.dialog.open(WorkOrderListColumnPopUpComponent, {
      disableClose: true,
      panelClass: ['dialogMainContainer'],
      data: this.displayedColumns 
    });
    this.subscription.add(
      dialogRef.componentInstance.columnsListUpdated.subscribe(
        (result:Selection[]) => {
         
          this.selectedCols = result;
        this.updateTable();
        })
    );

  }

  /** This method is to update the table display columns based on column selection**/
  updateTable(): void {
    
    this.displayedColumns = Object.assign([], this.columnList);
    
    this.columnList.forEach((item,index)=>{
      let checkedvalue = this.selectedCols.some(val=>{
        return val.value === item;
      })
      if(!checkedvalue)
      {
        let itemIndex = this.displayedColumns.findIndex(x=>x===item);
        this.displayedColumns.splice(itemIndex,1);        
      }

    })
    
  }
  /**
   * Applying filter value to the data defined
   * @param filterValue holds the filter value
   */
  
  

 resetList(filterValue: string) {
    filterValue = '';    
    this.filterText = filterValue.trim();  
    this.spinner.show();      
    this.searchterms.next(this.filterText);
    
  }

}
