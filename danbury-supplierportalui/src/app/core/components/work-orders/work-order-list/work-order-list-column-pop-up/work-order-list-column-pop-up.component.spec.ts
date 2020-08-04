import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderListColumnPopUpComponent } from './work-order-list-column-pop-up.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('WorkOrderListColumnPopUpComponent', () => {
  let component: WorkOrderListColumnPopUpComponent;
  let fixture: ComponentFixture<WorkOrderListColumnPopUpComponent>;
  let de: DebugElement[];  
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderListColumnPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderListColumnPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define variables', () => {
    expect(component.columnsList).toBeDefined();
  });
  it('selectedColumnsList defaults to: []', () => {
    expect(component.selectedColumnsList).toEqual([]);
  });
  it('should check whether checkboxes are created and also the count', () => {
    const checkbox = fixture.debugElement.queryAll(By.css('mat-checkbox'));
    const lengths: number = checkbox.length;
    for (let l = 0; l < lengths; l++) {
      expect(checkbox[l].nativeElement).toBeTruthy();
    }
    expect(lengths).toEqual(11);
  });

  it('check whether fullname and status is selected by default', () => {
    let columnListLength = component.columnsList.length;
    expect(component.columnsList[0].flag).toBe(true);
    expect(component.columnsList[columnListLength-1].flag).toBe(true);
    expect(component.columnsList[0].disabled).toBe(true);
    expect(component.columnsList[columnListLength-1].disabled).toBe(true);
  });
  it('should check the number of selected checkboxes on loading', () => {
    expect(component.selectedColumnsList.length).toEqual(5);
  });
  it('should check whether on click of checkbox is working', () => {
    spyOn(component, 'updateChkbxArray').and.callThrough();
    de = fixture.debugElement.queryAll(By.css('mat-checkbox'));
    el = de[5].nativeElement;
    expect(component.columnsList[5].flag).toBe(false);
    el.click();
    el.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.updateChkbxArray).toHaveBeenCalledTimes(1);
    expect(component.columnsList[5].flag).toBe(true);
  });

  it('should check whether on click of checkbox for Email is working', () => {
    spyOn(component, 'updateChkbxArray').and.callThrough();
    de = fixture.debugElement.queryAll(By.css('mat-checkbox'));
    el = de[3].nativeElement;
    expect(component.columnsList[4].displayName).toBe('Mobile Phone Number');
    expect(component.columnsList[4].flag).toBe(false);
    el.click();
    el.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.updateChkbxArray).toHaveBeenCalledTimes(1);
    expect(component.columnsList[4].flag).toBe(true);
    expect(component.selectedColumnsList.length).toBe(6);
  });

  it('should check whether on click of selected checkbox is changing to false', () => {
    spyOn(component, 'updateChkbxArray').and.callThrough();
    de = fixture.debugElement.queryAll(By.css('mat-checkbox'));
    el = de[4].nativeElement;
    expect(component.columnsList[2].flag).toBe(true);
    el.click();
    el.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.updateChkbxArray).toHaveBeenCalledTimes(1);
    expect(component.columnsList[2].flag).toBe(false);
    expect(component.selectedColumnsList.length).toEqual(4);
  });

  it('should check whether onclick of OK button calls save function', () => {

    spyOn(component, 'save').and.callThrough();
    el = fixture.debugElement.query(By.css('#save')).nativeElement;
    el.click();
    fixture.detectChanges();
    expect(component.save).toHaveBeenCalledTimes(1);
  });

  it('should check whether onclick of Reset button calls resetValues function', () => {
    spyOn(component, 'resetValues').and.callThrough();
    el = fixture.debugElement.query(By.css('#reset')).nativeElement;
    el.click();
    fixture.detectChanges();
    expect(component.resetValues).toHaveBeenCalledTimes(1);
  });

  it('should check whether onclick of close button calls onNoClick function', () => {
    spyOn(component, 'onNoClick').and.callThrough();
    el = fixture.debugElement.query(By.css('.close-icon')).nativeElement;
    el.click();
    fixture.detectChanges();
    expect(component.onNoClick).toHaveBeenCalledTimes(1);
  });
});
