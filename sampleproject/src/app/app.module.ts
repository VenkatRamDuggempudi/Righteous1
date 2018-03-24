import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import {DemoComponent } from './demo/demo.component';
import {DeptComponent} from './dept/dept.component';
import {EmpComponent} from './Emp/emp.component';
import {DataComponent} from './DataBinding/data.component';
import { CustPipeComponent , CustPipe } from './custompipes/custpipe.component';
import { FormComponent } from './FormsTempVar/form.component';
import { FormModel } from './FormsModel/formmodel.component';



@NgModule({
  declarations: [
    AppComponent , DemoComponent , DeptComponent, EmpComponent , DataComponent , CustPipeComponent , CustPipe , FormComponent , FormModel
  ],
  imports: [
    BrowserModule , FormsModule , ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
