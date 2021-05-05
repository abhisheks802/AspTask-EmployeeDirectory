import { Component, Input ,OnInit, Output,EventEmitter } from '@angular/core';
import { JobTitleService } from 'src/app/Services/job-title.service';

@Component({
  selector: 'app-show-job-titles',
  templateUrl: './show-job-titles.component.html',
  styleUrls: ['./show-job-titles.component.scss']
})
export class ShowJobTitlesComponent implements OnInit {

  @Input() public jobTitles;
  @Input() public message;
  @Output() public selectedJobTitleEmitter = new EventEmitter();
  @Output() public displayJobForm = new EventEmitter();
  @Output() public deleteButtonVisibility = new EventEmitter();
  constructor(private jobTitleService: JobTitleService) { }

  ngOnInit(): void {
    this.jobTitleService.getAllJobTitles().subscribe(job => this.jobTitles = job);
  }
  displayJobTitleDetails(id){
    this.jobTitleService.getAllJobTitles().subscribe(data => {this.jobTitles = data
     var selectedJob = this.jobTitles.find(job => job.jobID == id);
     this.selectedJobTitleEmitter.emit(selectedJob);
    })
    this.message = true;
    this.displayJobForm.emit(this.message);
    this.deleteButtonVisibility.emit(true);
  }
}
