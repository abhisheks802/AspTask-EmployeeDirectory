import { Injectable, Output } from '@angular/core';
import { Employee } from 'src/assets/employee';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {

  readonly APIUrl = "https://localhost:44370/api";

  public selectedEmployee:any = {firstname:"",lastname:"",email:"",jobTitle:"",office:"",department:"",phoneNumber:"",skypeID:"",employeeID:"",preferredName:""};
  public departments: string[] = [];
  public offices: string[] = [];
  public jobTitles: string[] = [];
  public filters: string[] = [];
  user:Employee = {firstname:"Andrew",lastname:"Philips",email:"and124@gmail.com",jobTitle:"BI Developer",office:"Seattle",department:"IT",phoneNumber:9986452253,skypeID:"897612",employeeID:1,preferredName:"Andrew Philips"};
  constructor(private http:HttpClient) {}

  getDepartments(){
    return ["IT","Human Resources","MD","Sales"];
  }
  getOffices(){
    return ["Seattle","India"];
  }
  getJobTitles(){
    return ["SharePoint Practice Head",".Net Development Lead","Recruiting Expert","BI Developer","Buisness Analyst"];
  }
  getFilters(){
    return ["Preferred Name","Department","Office","Job Title"];
  }
  getAllEmployees():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }
  // getDepartmentCount(department:string):Observable<any[]>{
  //  return this.http.get<any>(this.APIUrl+'/Employee/GetDepartmentCount?departmentName='+department);
  // }
  addEmployee(val:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.APIUrl+'/Employee',val);
  }
  updateEmployee(val:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.APIUrl+'/Employee',val);
  }
}
