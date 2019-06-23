import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empserv:EmployeeService) { }

  ngOnInit() {
    this.resetform();
  }
resetform(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.empserv.formData={
    EmployeeID:null,
    FullName:'',
    Position:'',
    EMPCode:'',
    Mobile:''

  }
}
onSubmit(form:NgForm){
this.insertRecord(form);

}
insertRecord(form:NgForm){

}
}
