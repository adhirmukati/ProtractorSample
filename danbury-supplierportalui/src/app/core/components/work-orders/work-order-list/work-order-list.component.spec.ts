import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DebugElement } from '@angular/core';
import { WorkOrderListComponent } from './work-order-list.component';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material';
import { MockComponent } from 'ng-mocks';
import { WorkOrderListColumnPopUpComponent } from './work-order-list-column-pop-up/work-order-list-column-pop-up.component';
export class MatDialogRefMock {
    componentInstance: any;
    constructor(component: any) {
      this.componentInstance = new component();
    }
    afterClosed(): Observable<any> {
      return of({ closedTest: 'test value' });
    }
    afterOpened(): Observable<any> {
      return of({ openedTest: 'test value' });
    }
  }
describe('QuoteRequestListColumnPopUpComponent', () => {
  let component: WorkOrderListComponent;
  let fixture: ComponentFixture<WorkOrderListComponent>;
  let de: DebugElement[];  
  let el: HTMLElement;
  const dialogMock: jasmine.SpyObj<MatDialog> = jasmine.createSpyObj(
    'MatDialog',
    ['open']
  );
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should define variables', () => {
    expect(component.displayedColumns).toBeDefined();
    expect(component.columnList).toBeDefined();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
     spyOn(component,'loadWorkOrders');
     spyOn(component, 'subscribeTosearchTerm').and.callThrough();
     component.ngOnInit();
     expect(component.loadWorkOrders).toHaveBeenCalled();
     expect(component.subscribeTosearchTerm).toHaveBeenCalled();
    });
  });
  
  it('should open Select Columns modal when clicked on view column icon', () => {
    spyOn(component, 'openTableOptions').and.callThrough();
    const view_column = fixture.debugElement.query(By.css('a')).nativeElement;
    view_column.click();
    fixture.detectChanges();
    expect(component.openTableOptions).toHaveBeenCalledTimes(1);
  });

  it('should open dialog to select columns when clicked on view_column icon', () => {
    spyOn(component, 'openTableOptions').and.callThrough();
    dialogMock.open.and.returnValue(
      new MatDialogRefMock(MockComponent(WorkOrderListColumnPopUpComponent))
    );
    el = fixture.debugElement.query(By.css('#view_column')).nativeElement;
    el.click();
    fixture.detectChanges();
    expect(component.openTableOptions).toHaveBeenCalledTimes(1);
    expect(dialogMock.open).toHaveBeenCalled();
    expect(component.displayedColumns).toBeDefined();    
  });
  it('reset clears filterText',()=>{
    spyOn(component,'loadWorkOrders').and.callThrough();
    component.resetList('');
    expect(component.filterText).toBe('');
    expect(component.loadWorkOrders).toHaveBeenCalled();
  });
  describe('applyFilter', () => {
    it('makes expected calls', () => {
      spyOn(component, 'loadWorkOrders').and.callThrough();
      component.applyFilter('');
      expect(component.loadWorkOrders).toHaveBeenCalled();
    });
  });
  describe('subscribeTosearchTerm', () => {
    it('makes expected calls', () => {
      spyOn(component, 'loadWorkOrders').and.callThrough();
      component.subscribeTosearchTerm();
      expect(component.loadWorkOrders).toHaveBeenCalled();
    });
  });
  
});
