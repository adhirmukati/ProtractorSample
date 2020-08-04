import { AbstractControl } from '@angular/forms';

export function ValidateAmount(control: AbstractControl) {
    if(Number(control.value)>=0){
      return null;
    }      
    return {"valueInvalid":true};
    
  }