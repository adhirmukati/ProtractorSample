import { Component, OnInit ,OnDestroy, Output,EventEmitter,Inject} from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material';
import {Selection} from '../../../../models/selection.model'
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
@Component({
  selector: 'app-quote-request-list-column-pop-up',
  templateUrl: './quote-request-list-column-pop-up.component.html',
  styleUrls: ['./quote-request-list-column-pop-up.component.scss']
})
export class QuoteRequestListColumnPopUpComponent implements OnInit,OnDestroy {
  /**
   * Prop to store the updated column list
   */
  selectedColumnsList: Selection[] = [];
  /**
   * It stores the value for media observer
   */
  gridColumn: number;
  /**
   * It Emits the data to the parent component
   */
  @Output() columnsListUpdated = new EventEmitter<Selection[]>();
  /**
   * media subscription
   */
  mediasbscription: Subscription;
  constructor(public dialogRef: MatDialogRef<QuoteRequestListColumnPopUpComponent>,
    private readonly mediaobserver: MediaObserver,
    @Inject(MAT_DIALOG_DATA) public data: string[]) {
      this.mediasbscription = mediaobserver.asObservable().subscribe((val: MediaChange[]) => {
        if (val[0].mqAlias === 'xs') {
          this.gridColumn = 1;
        } else {
          this.gridColumn = 2;
        }
      });
     }
  columnsList: Selection[] = [
    {
      displayName: 'Full Name',
      value: 'fullName',
      flag: true,
      disabled: true
    },       
    {
      displayName: 'Order #',
      value: 'orderReference',
      flag: true,
      disabled: false
    },
    {
      displayName: 'Status',
      value: 'quoteStatusDate',
      flag: true,
      disabled: true
    },
    {
      displayName: 'Departure',
      value: 'departure',
      flag: true,
      disabled: false
    },
    {
      displayName: 'Destination',
      value: 'destination',
      flag: true,
      disabled: false
    },
    
    {
      displayName: 'Email Address',
      value: 'preferredEmailAddress',
      flag: false,
      disabled: false
    },
    {
      displayName: 'Phone #',
      value: 'preferredPhoneNumber',
      flag: false,
      disabled: false
    },
    
    {
      displayName: 'Company',
      value: 'company',
      flag: true,
      disabled: false
    }
    
  ];

  populateArray(): void {
    this.selectedColumnsList = [
      {
        displayName: 'Full Name',
        value: 'fullName',
        flag: true,
        disabled: true
      },     
      
      {
        displayName: 'Order #',
        value: 'orderReference',
        flag: true,
        disabled: false
      },
      {
        displayName: 'Status',
        value: 'quoteStatusDate',
        flag: true,
        disabled: true
      },
      {
        displayName: 'Departure',
        value: 'departure',
        flag: true,
        disabled: false
      },
      {
        displayName: 'Destination',
        value: 'destination',
        flag: true,
        disabled: false
      }
      
    ];
  }

  
  ngOnInit() {
    
    this.columnsList.forEach((col, ind) => {
      this.data.forEach((data, index) => {
        if (col.value === data) {
          col.flag = true;
          this.selectedColumnsList.push(col);
        } else {
          if (this.columnsList.findIndex(val => val.value !== data) > 0) {
            col.flag = false;
          }
        }
      });
    });
  }

  close(): void {
    event.preventDefault();
    event.stopPropagation();
    this.dialogRef.close(true);
  }
  onNoClick(evt): void {
    evt.preventDefault();
    this.dialogRef.close();
  }
  submitColumnOptions():void
  {

  }
  /**updates the new columns list */
  updateChkbxArray(selected: any) {
    
    const index = this.columnsList.findIndex(x => x.value === selected.value);
    this.columnsList[index].flag = !selected.flag;
    if (this.columnsList[index].flag === true) {
      this.selectedColumnsList.splice(this.selectedColumnsList.length - 1,
        0, { displayName: selected.displayName, value: selected.value, flag: !selected.flag, disabled: selected.disabled });
    } else {
      const ind: number = this.selectedColumnsList.findIndex(y => y.value === selected.value);
      if (ind !== -1) {
        this.selectedColumnsList.splice(ind, 1);
      }
    }
    
  }

  /**
   * Resets the value to default version
   */
  resetValues(): void {
    this.populateArray();
    this.columnsList.forEach((obj) => {
      const existData = this.selectedColumnsList.find(({ value }) => obj.value === value);
      if (!existData) {
        obj.flag = false;
      } else {
        obj.flag = true;
      }
    });
  }
  /**
   * Emits the updated array to parent component
   */
  save(): void {
    this.dialogRef.close();
    this.columnsListUpdated.emit(this.selectedColumnsList);
  }
  /**
   * destroys the object
   */
  ngOnDestroy() {
    this.mediasbscription.unsubscribe();
  }
}
