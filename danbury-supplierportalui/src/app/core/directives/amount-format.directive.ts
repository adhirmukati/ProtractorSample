import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { formatNumber } from '@angular/common';
import { FormControl } from '@angular/forms';
/** Directive that can be used in HTML */
@Directive({
  selector: '[appAmountFormat]'
})
export class AmountFormatDirective {
  /** receives form control from calling component */
  @Input('appAmountFormat') formContol: FormControl;

  /**
   * base constructor
   * @param el HTML reference element
   */
  constructor(private readonly el: ElementRef) {
  }
  /**
   * Decorator that declares a DOM(focus) event to listen for and provides a handler method to run when that event occur
   */
  @HostListener('focus') onFocus() {
    const value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.replace(/[,]/g, '');
  }

  /**
   * Decorator that declares a DOM(blur) event to listen for and provides a handler method to run when that event occur
   */
  @HostListener('blur') onBlur() {
    const value = this.el.nativeElement.value;
    
    if (Number(value) > 0) {
      if (value.length > 0 && value.length < 21) {
        this.el.nativeElement.value = formatNumber(Math.ceil(value), 'en-US');
      }
    }   
  }
}
