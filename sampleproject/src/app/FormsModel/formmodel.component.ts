import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
@Component({selector:'formmodel' , templateUrl:'./formmodel.component.html'})
export class FormModel{
    public form1=new FormGroup( { fname : new FormControl(null, Validators.required),
                                  lname : new FormControl(null, Validators.required),
                                  city : new FormControl(null, [Validators.minLength(3),Validators.maxLength(10)]),
                                  email : new FormControl(null, Validators.email),
                                  pin : new FormControl(null, Validators.pattern("\\d{6}"))
    });
}