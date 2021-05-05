import { Component, OnInit } from '@angular/core';
import { FilterServiceService } from '../Services/filter-service.service';

@Component({
  selector: 'app-job-titles',
  templateUrl: './job-titles.component.html',
  styleUrls: ['./job-titles.component.scss']
})
export class JobTitlesComponent implements OnInit {

  public jobTitles;
  public message = false;
  public selectedJobTitle;
  public deleteButtonVisibility:boolean = true;
  constructor(private filterService: FilterServiceService) { }

  ngOnInit(): void {
    this.updateJobTitles()
  }
  addJobTitle(){
    this.message = true;
    this.selectedJobTitle = {jobName: "",jobID: 0};  
    this.deleteButtonVisibility = false;
  }
  updateJobTitles(){
    this.filterService.getAllJobTitles().subscribe(data =>this.jobTitles = data);
  }

}
