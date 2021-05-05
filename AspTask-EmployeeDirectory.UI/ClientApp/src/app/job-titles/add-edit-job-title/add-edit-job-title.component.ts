import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FilterServiceService } from 'src/app/filter-service.service';
import { JobTitle } from 'src/Models/jobTitle';

@Component({
  selector: 'app-add-edit-job-title',
  templateUrl: './add-edit-job-title.component.html',
  styleUrls: ['./add-edit-job-title.component.scss']
})
export class AddEditJobTitleComponent implements OnInit {

  public jobTitles;
  public errorMessage:string ="";
  @Input() selectedJobTitle;
  @Input() public deleteButtonVisibility;
  @Output() public hideForm = new EventEmitter();
  @Output() public updateJobTitlesEmitter = new EventEmitter();
  constructor(private filterService: FilterServiceService) { }

  ngOnInit(): void {
  }
  checkIfEmpty(){
    if(this.selectedJobTitle.jobName.toString().trim() == ''){
      this.errorMessage = "Please fill all the fields";
    }
    else{
      this.addJobTitle();
    }
  }
  addJobTitle(){
    let jobTitle:JobTitle = new JobTitle();
    jobTitle.jobName = this.selectedJobTitle.jobName;
    jobTitle.jobStatus = "Active";
    this.filterService.getAllJobTitles().subscribe(data => {this.jobTitles = data
    var findJob = this.jobTitles.find(job => job.jobID == this.selectedJobTitle.jobID);
    if(findJob != null){
      jobTitle.jobID = this.selectedJobTitle.jobID;
      this.filterService.updateJob(jobTitle).subscribe(res=>{
        this.updateJobTitlesEmitter.emit(jobTitle);
        this.cancelEvent();
      })
    }
    else{
      this.filterService.addJob(jobTitle).subscribe(res =>{
        this.cancelEvent();
        this.updateJobTitlesEmitter.emit(jobTitle);
      })
    }
  })
  }
  cancelEvent(){
    this.hideForm.emit(false);
  }
  deleteJobTitle(){
    var jobID = this.selectedJobTitle.jobID;
    this.filterService.deleteJob(jobID).subscribe(res=>{
      this.updateJobTitlesEmitter.emit(jobID);
      this.cancelEvent();
    })
  }
}
