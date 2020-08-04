import {FormGroup, FormControl} from '@angular/forms';
import {dateRangeValidator} from './date.validator';

describe('dateValidator',() =>{
    const formCtrlGroup = new FormGroup({
        start: new FormControl('input'),
        end: new FormControl('input')
    })
    

    it('should return null when form values are null',()=>{
        formCtrlGroup.setValue({
            start: '',
            end: ''
        })
        expect(dateRangeValidator(formCtrlGroup)).toBe(null);
    })

    it ('show return dateValidator: true for incorrect date range',()=>{
        formCtrlGroup.setValue({
            start: '2020-05-15',
            end: '2020-05-14'
        })
        expect(dateRangeValidator(formCtrlGroup)).toEqual({ 'dateValidator': true })
    })

})


