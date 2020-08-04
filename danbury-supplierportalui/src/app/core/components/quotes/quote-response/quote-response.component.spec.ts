import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { QuoteResponseComponent } from './quote-response.component';
import { DebugElement } from '@angular/core';

describe('QuoteResponseComponent', () => {
  let component: QuoteResponseComponent;
  let fixture: ComponentFixture<QuoteResponseComponent>;
  let de: DebugElement[];  
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.editCandidateForm.valid).toBeFalsy();
  });

  it('reference feild  validity', () => {
    let reference = component.editCandidateForm.controls["reference"];
    expect(reference.valid).toBeFalsy();

    //setting empty value for reference
    reference.setValue('');
    expect(reference.hasError('required')).toBeTruthy();

    //setting some text value for reference
    reference.setValue('test');
    expect(reference.hasError('required')).toBeFalsy();
    expect(reference.valid).toBeTruthy();
  });

  it('vane line cost feild validity',()=>{
    let vaneLineCost = component.editCandidateForm.controls["bidAmount"];
    expect(vaneLineCost.valid).toBeFalsy();

    //setting empty value for vaneLineCost
    vaneLineCost.setValue('');
    expect(vaneLineCost.hasError('required')).toBeTruthy();

    //setting non numeric value for vaneLineCost
    vaneLineCost.setValue('sdf234');
    expect(vaneLineCost.hasError('valueInvalid')).toBeTruthy();

    //setting value to zero for vaneLineCost
    vaneLineCost.setValue('0');
    expect(vaneLineCost.hasError('min')).toBeTruthy();

    //setting valid value for vaneLine Cost
    vaneLineCost.setValue('1233');
    expect(vaneLineCost.valid).toBeTruthy();
  });

  it('Estimated Weight feild validity',()=>{
    let ctrl = component.editCandidateForm.controls["estimatedWeight"];
    expect(ctrl.valid).toBeFalsy();

    //setting empty value for vaneLineCost
    ctrl.setValue('');
    expect(ctrl.hasError('required')).toBeTruthy();

    //setting non numeric value for vaneLineCost
    ctrl.setValue('sdf234');
    expect(ctrl.hasError('valueInvalid')).toBeTruthy();

    //setting value to zero for vaneLineCost
    ctrl.setValue('0');
    expect(ctrl.hasError('min')).toBeTruthy();

    //setting valid value for vaneLine Cost
    ctrl.setValue('1233');
    expect(ctrl.valid).toBeTruthy();
  });

  it('Estimated Mileage feild validity',()=>{
    let ctrl = component.editCandidateForm.controls["estimatedDistance"];
    expect(ctrl.valid).toBeFalsy();

    //setting empty value for vaneLineCost
    ctrl.setValue('');
    expect(ctrl.hasError('required')).toBeTruthy();

    //setting non numeric value for vaneLineCost
    ctrl.setValue('sdf234');
    expect(ctrl.hasError('valueInvalid')).toBeTruthy();

    //setting value to zero for vaneLineCost
    ctrl.setValue('0');
    expect(ctrl.hasError('min')).toBeTruthy();

    //setting valid value for vaneLine Cost
    ctrl.setValue('1233');
    expect(ctrl.valid).toBeTruthy();
  });

  it('Default MoveType check to regular',()=>{
      let ctrl = component.editCandidateForm.controls["moveType"];
      expect(ctrl.value).toEqual("Regular");
  })

  it('should enable submit without storage section',()=>{
    let reference = component.editCandidateForm.controls["reference"];
    let moveType = component.editCandidateForm.controls["moveType"];
    let vaneLineCost = component.editCandidateForm.controls["bidAmount"];
    let estimateDistance = component.editCandidateForm.controls["estimatedDistance"];
    let estimateWeight = component.editCandidateForm.controls["estimatedWeight"];

    //setting valid value for all components
    reference.setValue("TestReference");
    moveType.setValue("Regular");
    vaneLineCost.setValue("13000");
    estimateDistance.setValue("1200");
    estimateWeight.setValue("300");
    
     let submitBtn  = fixture.debugElement.query(By.css('.contained-button'));
    expect(submitBtn.nativeElement.disabled).toBeFalsy();

  })
  it('should enable submit with storage section',()=>{
    let reference = component.editCandidateForm.controls["reference"];
    let moveType = component.editCandidateForm.controls["moveType"];
    let vaneLineCost = component.editCandidateForm.controls["bidAmount"];
    let estimateDistance = component.editCandidateForm.controls["estimatedDistance"];
    let estimateWeight = component.editCandidateForm.controls["estimatedWeight"];
    let storageCost = component.editCandidateForm.controls["bidAmountStorage"];
    let storageDays = component.editCandidateForm.controls["bidStorageDays"];
    //setting valid value for all components
    reference.setValue("TestReference");
    moveType.setValue("Regular");
    vaneLineCost.setValue("13000");
    estimateDistance.setValue("1200");
    estimateWeight.setValue("300");
    storageCost.setValue("2000");
    storageDays.setValue("20");
    
     let submitBtn  = fixture.debugElement.query(By.css('.contained-button'));
    expect(submitBtn.nativeElement.disabled).toBeFalsy();
   

  })

  it('should disable submit with invalid storage section',()=>{
    let reference = component.editCandidateForm.controls["reference"];
    let moveType = component.editCandidateForm.controls["moveType"];
    let vaneLineCost = component.editCandidateForm.controls["bidAmount"];
    let estimateDistance = component.editCandidateForm.controls["estimatedDistance"];
    let estimateWeight = component.editCandidateForm.controls["estimatedWeight"];
    let storageCost = component.editCandidateForm.controls["bidAmountStorage"];
    let storageDays = component.editCandidateForm.controls["bidStorageDays"];
    let submitBtn  = fixture.debugElement.query(By.css('.contained-button'));
    //setting valid value for all components except for storage section
    reference.setValue("TestReference");
    moveType.setValue("Regular");
    vaneLineCost.setValue("13000");
    estimateDistance.setValue("1200");
    estimateWeight.setValue("300");
    //setting empty value for storage cost
    storageCost.setValue("");
    expect(storageCost.hasError('required')).toBeTruthy();
    expect(storageDays.disabled).toBeTruthy();
    expect(submitBtn.nativeElement.disabled).toBeTruthy();

    // setting storage cost but no storage days
    storageCost.setValue("123");
    storageDays.setValue("");
    expect(storageDays.disabled).toBeTruthy();
    expect(storageDays.hasError('required')).toBeTruthy();
    expect(submitBtn.nativeElement.disabled).toBeTruthy();
    
    //setting zero for storage cost
    storageCost.setValue("0");
    expect(storageCost.hasError("min")).toBeTruthy();

    //setting zero for storage days
    storageDays.setValue("0");
    expect(storageDays.hasError("min")).toBeTruthy();

    //setting non numeric for storage cost
    storageCost.setValue("njjsd");
    expect(storageCost.hasError("valueInvalid")).toBeTruthy();

    //setting non numeric  for storage days
    storageDays.setValue("sdfsd");
    expect(storageDays.hasError("valueInvalid")).toBeTruthy();
    
  })

  


});
