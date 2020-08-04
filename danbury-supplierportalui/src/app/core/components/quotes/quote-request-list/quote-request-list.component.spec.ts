import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MockComponent, MockComponents } from 'ng-mocks';

import {QuoteRequestListColumnPopUpComponent} from '../quote-request-list/quote-request-list-column-pop-up/quote-request-list-column-pop-up.component';
import { QuoteRequestListComponent } from './quote-request-list.component';

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

describe('QuoteRequestListComponent', () => {
  let component: QuoteRequestListComponent;
  let fixture: ComponentFixture<QuoteRequestListComponent>;
  let de: DebugElement[];  
  let el: HTMLElement;
  const dialogMock: jasmine.SpyObj<MatDialog> = jasmine.createSpyObj(
    'MatDialog',
    ['open']
  );
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should define variables', () => {
    expect(component.displayedColumns).toBeDefined();
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
      new MatDialogRefMock(MockComponent(QuoteRequestListColumnPopUpComponent))
    );
    el = fixture.debugElement.query(By.css('#view_column')).nativeElement;
    el.click();
    fixture.detectChanges();
    expect(component.openTableOptions).toHaveBeenCalledTimes(1);
    expect(dialogMock.open).toHaveBeenCalled();
    expect(component.displayedColumns).toBeDefined();    
  });

  it('should call applyFilter function when user types', async(() => {
    spyOn(component, 'applyFilter').and.callThrough();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      el = fixture.debugElement.query(By.css('#searchInput')).nativeElement;
      expect(el).toBeTruthy();
      el.setAttribute('value', 'Order #');
      const event = new KeyboardEvent('input', {});
      el.dispatchEvent(event);
      fixture.detectChanges();
      expect(component.applyFilter).toHaveBeenCalledTimes(1);
    });
  }));

  it('should close search bar on click of x button', () => {
    spyOn(component, 'resetList').and.callThrough();
    const div = fixture.debugElement.query(By.css('.search_table'));
    const addBtn = div.query(By.css('button')).nativeElement;
    addBtn.click();
    fixture.detectChanges();
    const closeBtn = fixture.debugElement.query(By.css('#search_icon')).nativeElement;
    closeBtn.click();
    expect(component.resetList).toHaveBeenCalled();
  });

});
