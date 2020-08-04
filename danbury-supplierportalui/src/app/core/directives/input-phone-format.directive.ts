import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

/** Attribute Directive that can be used in HTML */
@Directive({
  selector: '[appInputPhoneFormat]'
})
export class InputPhoneFormatDirective implements OnInit {
/**injecting dependencies */
  constructor(private readonly el: ElementRef) { }
  /**initialise the directive */
  ngOnInit(): any {
    this.formatPhone();
  }
  /**
   * Decorator that declares a DOM(focus) event to listen for and provides a handler method to run when that event occur
   */
  @HostListener('focus') onFocus() {
    const value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.replace(/[-\(\) ]/g, '');
  }
  /**
   * Decorator that declares a DOM(blur) event to listen for and provides a handler method to run when that event occur
   */
  @HostListener('blur') onBlur() {
    this.formatPhone();
  }
  /**function to format phone number */
  formatPhone(): void {
    const reg = new RegExp('^[0-9]*$');
    const value = this.el.nativeElement.value;
    if (value !== '' && reg.test(value) && value.length === 10) {
      this.el.nativeElement.value = `(${value.substring(0, 3)}) ${value.substring(
        3,
        6
      )}-${value.substring(6, 10)}`;
    }
  }
}
