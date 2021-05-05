import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Office } from 'src/app/Models/office';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  readonly APIUrl = "https://localhost:44370/api";

  constructor(private http:HttpClient) {}

  getAllOffices():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Office');
  }
  addOffices(val:Office):Observable<Office>{
    return this.http.post<Office>(this.APIUrl+'/Office',val);
  }
  updateOffice(val:Office):Observable<Office>{
    return this.http.put<Office>(this.APIUrl+'/Office',val);
  }
  deleteOffice(val:Office):Observable<Office>{
    return this.http.get<Office>(this.APIUrl+'/Office/'+ val);
  }
}