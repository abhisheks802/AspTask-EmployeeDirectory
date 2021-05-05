import { Component, Input, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';
import { JobTitleService } from 'src/app/Services/job-title.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  public allDepartments;
  public departmentName:string = '';
  public jobTitleName:string = '';;
  public allJobTitles;
  @Input() public employee;

  constructor(private departmentService:DepartmentService,private jobTitleService: JobTitleService) { }

  ngOnInit(): void {
    this.departmentService.getAllDepartments().subscribe(data=> {this.allDepartments = data;
      this.departmentName = this.allDepartments.find(dep => dep.departmentID == this.employee.departmentID).departmentName;
       })
    this.jobTitleService.getAllJobTitles().subscribe(data=> {this.allJobTitles = data;
      var job = this.allJobTitles.find(job => job.jobID == this.employee.jobTitleID);
      this.jobTitleName = job.jobName;
    })
  }

}
