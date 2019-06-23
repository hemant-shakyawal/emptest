import { Injectable } from '@angular/core';
import { Employee } from './employee.modle';
import{HttpClient}from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData:Employee;
  readonly url="http://localhost:61471/api"
  constructor(private http:HttpClient) { }
  postEmployee(formData:Employee){
return this.http.post(this.url+'/Employee',formData);
  }
}
