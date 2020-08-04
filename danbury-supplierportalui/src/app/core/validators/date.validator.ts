import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';
export function dateRangeValidator(control: AbstractControl): {[key: string]: any} {
    let startDate = control.get('start').value;
    let endDate = control.get('end').value;

    if(!endDate && startDate){
        control.get('end').setErrors({ 'startNoEnd': true })
        control.get('end').markAsTouched();
        return {'startNoEnd':true};
    }
    else if(!startDate && endDate){
        control.get('start').setErrors({ 'endNoStart': true })
        control.get('start').markAsTouched();
        return {'endNoStart':true};
    }
    else if (moment(endDate).diff(moment(startDate)) < 0 ) {
        control.get('end').setErrors({ 'dateValidator': true })
        control.get('end').markAsTouched();
        return { 'dateValidator': true };
    }
    control.get('end').setErrors(null)
    control.get('start').setErrors(null)
    control.setErrors(null)
    return null;
}

export function deliveryPriortoLoadValidator(control: AbstractControl): {[key: string]: any}{
    let delivery = control.get('delivery').value;
    let load = control.get('load').value;
    
    if (moment(delivery).diff(moment(load)) < 0) {
        control.get('delivery').setErrors({ 'deliveryPriorErr': true })
        control.get('delivery').markAllAsTouched();
        return { 'deliveryPriorErr': true };
    }
    control.get('delivery').markAllAsTouched();
    return null;
    
}

export function deliveryPriortoPackValidator(control: AbstractControl): {[key: string]: any}{
    let load = control.get('load').value;
    let pack = control.get('pack').value;
    
    if (moment(load).diff(moment(pack)) < 0) {
        control.get('load').setErrors({ 'deliveryPriorToPackErr': true })
        control.get('load').markAllAsTouched();
        return { 'deliveryPriorToPackErr': true };
    }
    control.get('load').markAllAsTouched();
    return null;
    
}

export function deliverPriortoStorageOutValidator(control: AbstractControl): {[key: string]: any}{
    let delivery = control.get('delivery').value;
    let storageOut= control.get('storageOut').value;
    if(moment(delivery).diff(moment(storageOut)) < 0 ){
        control.get('delivery').setErrors({ 'deliveryPriorStorageErr': true })
        control.get('delivery').markAllAsTouched();
        return { 'deliveryPriorStorageErr': true };
    }
    control.get('delivery').markAllAsTouched();
    return null;
}
export function storageDatesValidator(control: AbstractControl): {[key: string]: any}{
    let storageIn = control.get('storageIn').value;
    let storageOut = control.get('storageOut').value;
    if (moment(storageOut).diff(moment(storageIn)) < 0) {
        control.get('storageOut').setErrors({ 'storageOutPriorErr': true })
        control.get('storageOut').markAllAsTouched();
        return { 'storageOutPriorErr': true };
    }
    control.get('storageOut').setErrors(null)
    control.get('storageIn').setErrors(null)
    control.setErrors(null)
    return null;
}