import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from 'src/app/Models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  readonly APIUrl = "https://localhost:44370/api";

  constructor(private http:HttpClient) {}

  getAllDepartments():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Department');
  }
  addDepartment(val:Department):Observable<Department>{
    return this.http.post<Department>(this.APIUrl+'/Department',val);
  }
  updateDepartment(val:Department):Observable<Department>{
    return this.http.put<Department>(this.APIUrl+'/Department',val);
  }
  deleteDepartment(val:Department):Observable<Department>{
    return this.http.get<Department>(this.APIUrl+'/Department/'+ val);
  }
}