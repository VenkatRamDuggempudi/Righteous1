import {Component} from '@angular/core';
@Component({selector:'demo' , templateUrl:'demo.component.html'})
export class DemoComponent{
    public dateAndTime:Date=new Date();
    public time = this.dateAndTime.toLocaleTimeString();
    
    
    public title:string="Welcome to angular5 programming";
    public image:string="Image.jpg";
    /*
    public myTimer() {
        let d = new Date();
        let t = d.toLocaleTimeString();
        //document.getElementById("demo").innerHTML = t;
        this.time=t;
    }
    */
}