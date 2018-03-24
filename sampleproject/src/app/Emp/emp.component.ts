import {Component} from '@angular/core';
class Emp{
    public empId:number=0;
    public empName:string="";
    public sal:number=0.0;
    public deptNo:number=0;
}
@Component({selector:'emp',templateUrl:'./emp.component.html'})
export class EmpComponent{
    public employees:Emp[]=[{empId:30432,empName:'scott',sal:6800.00,deptNo:10},
    {empId:30431,empName:'smitt',sal:850.00,deptNo:10},
    {empId:30433,empName:'gil',sal:449.99,deptNo:10},
    {empId:30434,empName:'don',sal:5999.00,deptNo:20},
    {empId:30435,empName:'king',sal:10000.00,deptNo:20}];


}