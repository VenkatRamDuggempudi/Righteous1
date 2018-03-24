import { Component } from '@angular/core';
import { Pipe,PipeTransform } from '@angular/core';
@Pipe({ name:'gender_abbr' })

export class CustPipe implements PipeTransform {
   // @override
    public transform(input:string):string {
        let output:string=""; 
        if(input=='M'){output='Male';}
        if(input=='F'){output='Female';}
    return output;    
    }

}
@Component({ selector:'custpipe', templateUrl:'./custpipe.component.html' , styleUrls:['./custpipe.component.css']  })
export class  CustPipeComponent{
    public info:any=[{name:'scott',gender:'M'},{name:'miller',gender:'M'},{name:'naNcy',gender:'F'},{name:'ANGEL',gender:'F'}];
    public images:string[]=["Image1.jpg","Image2.jpg","Image3.jpg","Image4.jpg","Image5.jpg","Image6.jpg",
    "Image7.jpg","Image8.jpg","Image9.jpg","Image10.jpg","Image11.jpg","Image12.jpg","Image13.jpg"];

}


