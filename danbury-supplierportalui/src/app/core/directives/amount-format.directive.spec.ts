import { AmountFormatDirective } from './amount-format.directive';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
    template: `<input [appAmountFormat]= "MoveBudget" [formControl]="MoveBudget" >`
})
class FocusComponent {
    MoveBudget = new FormControl('', Validators.required);
}
describe('AmountFormatDirective', () => {
    let component: FocusComponent;
    let fixture: ComponentFixture<FocusComponent>;
    let inputEl: DebugElement;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FocusComponent, AmountFormatDirective],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(FocusComponent);
        component = fixture.componentInstance;
        inputEl = fixture.debugElement.query(By.css('input'));
    });
    it('should create an instance', () => {
        const directive = new AmountFormatDirective(inputEl);
        expect(directive).toBeTruthy();
    });
    it('should convert amount format to number on Focus', () => {
        inputEl.nativeElement.value = '32,850';
        inputEl.triggerEventHandler('focus', null);
        fixture.detectChanges();
        expect(inputEl.nativeElement.value).toEqual('32850');
    });

    it('should convert number to amount format on Blur', () => {
        inputEl.nativeElement.value = '32850';
        inputEl.triggerEventHandler('blur', null);
        fixture.detectChanges();
        expect(inputEl.nativeElement.value).toEqual('32,850');
    });
    it('should set error if input is not a number', () => {
        inputEl.nativeElement.value = 'abc';
        inputEl.triggerEventHandler('blur', null);
        fixture.detectChanges();
        expect(inputEl.nativeElement.value).toEqual('abc');
    });
});
