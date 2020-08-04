import { InputPhoneFormatDirective } from './input-phone-format.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<input matInput appInputPhoneFormat type="text" placeholder="Mobile Phone Number" formControlName="PhoneNumber"
   (ngModelChange)="addValidators()" [readonly]="readOnlyField" maxlength="10">`
})

class FocusComponent {
}

describe('InputPhoneFormatDirective', () => {
  let component: FocusComponent;
  let fixture: ComponentFixture<FocusComponent>;
  let inputEl: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocusComponent, InputPhoneFormatDirective]
    });
    fixture = TestBed.createComponent(FocusComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('should create an instance', () => {
    const directive = new InputPhoneFormatDirective(inputEl);
    expect(directive).toBeTruthy();
  });

  it('should convert us domestic phone number to normal format on Focus', () => {
    inputEl.nativeElement.value = '(987) 654-3345';
    inputEl.triggerEventHandler('focus', null);
    expect(inputEl.nativeElement.value).toEqual('9876543345');
  });

  it('should convert contact number to us domestic phone number on Blur', () => {
    inputEl.nativeElement.value = '9876543345';
    inputEl.triggerEventHandler('blur', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toEqual('(987) 654-3345');
  });
});
