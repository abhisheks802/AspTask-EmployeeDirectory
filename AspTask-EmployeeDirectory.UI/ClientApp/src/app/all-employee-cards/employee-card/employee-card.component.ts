import { Component, Input, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';
import { FilterServiceService } from 'src/app/Services/filter-service.service';

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

  constructor(private filterService: FilterServiceService,private departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.departmentService.getAllDepartments().subscribe(data=> {this.allDepartments = data;
      this.departmentName = this.allDepartments.find(dep => dep.departmentID == this.employee.departmentID).departmentName;
       })
    this.filterService.getAllJobTitles().subscribe(data=> {this.allJobTitles = data;
      var job = this.allJobTitles.find(job => job.jobID == this.employee.jobTitleID);
      this.jobTitleName = job.jobName;
    })
  }

}
