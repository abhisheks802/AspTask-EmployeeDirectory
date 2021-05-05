import { Component, Input ,OnInit, Output,EventEmitter } from '@angular/core';
import { FilterServiceService } from 'src/app/filter-service.service';

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
  constructor(private filterService: FilterServiceService) { }

  ngOnInit(): void {
    this.filterService.getAllJobTitles().subscribe(job => this.jobTitles = job);
  }
  displayJobTitleDetails(id){
    this.filterService.getAllJobTitles().subscribe(data => {this.jobTitles = data
     var selectedJob = this.jobTitles.find(job => job.jobID == id);
     this.selectedJobTitleEmitter.emit(selectedJob);
    })
    this.message = true;
    this.displayJobForm.emit(this.message);
    this.deleteButtonVisibility.emit(true);
  }
}
