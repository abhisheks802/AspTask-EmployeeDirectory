import { Component, OnInit } from '@angular/core';
import { JobTitleService } from 'src/app/Services/job-title.service';

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
  constructor(private jobTitleService: JobTitleService) { }

  ngOnInit(): void {
    this.updateJobTitles()
  }
  addJobTitle(){
    this.message = true;
    this.selectedJobTitle = {jobName: "",jobID: 0};  
    this.deleteButtonVisibility = false;
  }
  updateJobTitles(){
    this.jobTitleService.getAllJobTitles().subscribe(data =>this.jobTitles = data);
  }

}
