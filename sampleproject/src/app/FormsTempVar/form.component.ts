import { Component } from '@angular/core';
@Component({ selector:'forms-valid', templateUrl:'./form.component.html'})
export class FormComponent {
    public fname:string="";
    public lname:string="";
    public city:string="";
    public email:string="";
    public pin:number;
}