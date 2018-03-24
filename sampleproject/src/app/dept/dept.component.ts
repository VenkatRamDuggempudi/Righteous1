import {Component} from '@angular/core';
class Dept{
    public deptNo:number=0;
    public deptName:string="";
    public location:string="";
    
}
@Component({selector:'dept',templateUrl:'./dept.component.html'})
export class DeptComponent{
    public depts:Dept[]=[{deptNo:10,deptName:'accounts',location:'HYD'},
                         {deptNo:10,deptName:'sales',location:'HYD'},
                         {deptNo:20,deptName:'Management',location:'Banglore'},
                         {deptNo:10,deptName:'accounts',location:'Banglore'}
];
/**
 * addItem
 */
public dept1:boolean=true;
public deptNo:number=0;
public deptName:string="";
public location:string="";
public dept=new Dept();
public addItem() :void {
    this.dept.deptNo=this.deptNo;
    this.dept.deptName=this.deptName;
    this.dept.location=this.location;
    this.depts.push(this.dept);
    this.dept1=true;
}
public removeItem(n) :void {
    this.depts.splice(n,1);
}

public removeAllItems( ) :void {
    this.depts.splice(0);
    this.dept1=false;
}
public selectItem(n) :void {
this.deptNo=this.depts[n].deptNo;
this.deptName=this.depts[n].deptName;
this.location=this.depts[n].location;
}

public editItem():void{
    var n:number=this.depts.findIndex(x=>x.deptName==this.deptName);
    this.depts[n].deptNo=this.deptNo;
    this.depts[n].location=this.location;
}

}