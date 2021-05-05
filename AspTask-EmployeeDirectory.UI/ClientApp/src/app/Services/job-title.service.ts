import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobTitle } from 'src/app/Models/jobTitle';

@Injectable({
  providedIn: 'root'
})
export class JobTitleService {

  readonly APIUrl = "https://localhost:44370/api";

  constructor(private http:HttpClient) {}

  getAllJobTitles():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/JobTitle');
  }
  addJob(val:JobTitle):Observable<JobTitle>{
    return this.http.post<JobTitle>(this.APIUrl+'/JobTitle',val);
  }
  updateJob(val:JobTitle):Observable<JobTitle>{
    return this.http.put<JobTitle>(this.APIUrl+'/JobTitle',val);
  }
  deleteJob(val:JobTitle):Observable<JobTitle>{
    return this.http.get<JobTitle>(this.APIUrl+'/JobTitle/'+ val);
  }
}

