import { Injectable } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {

  readonly APIUrl = "https://localhost:44370/api";

  user:Employee = {firstname:"Abhishek",lastname:"Singh",email:"abhisheks802@gmail.com",jobTitleID:4,officeID: 3,departmentID:4,phoneNumber:7260003897,skypeID:"ab101",employeeID:9,preferredName:"Abhishek Singh",employeeStatus:"Active"};
  constructor(private http:HttpClient) {}

  getFilters(){
    return ["Preferred Name","Department","Office","Job Title"];
  }
  getRoutes(){
    return ["Department","Office","Job Title"];
  }
  getAllEmployees():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }
  getEmployeeCards():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee/GetEmployeeCard');
  }
  addEmployee(val:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.APIUrl+'/Employee',val);
  }
  updateEmployee(val:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.APIUrl+'/Employee',val);
  }
  deleteEmployee(val:Employee):Observable<Employee>{
    return this.http.get<Employee>(this.APIUrl+'/Employee/'+ val);
  }
}
