import { Component } from '@angular/core';

@Component({selector:'data',templateUrl:'./data.component.html'})
export class DataComponent{
    public uname:String="venkat";
    public age:number=20;
    public image:string="Image1.jpg";
    public str:string="";
    public str1:string="";
    public name:string="";
    public name1:string="";
    public welCome(){
        this.str='welcome to   '+this.name;
    }
    public login(){

        this.str1='Your are Login with Credentials '+this.name1 +'   & ******';
    }
}