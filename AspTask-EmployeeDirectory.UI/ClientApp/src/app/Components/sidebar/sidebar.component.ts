import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';
import { FilterServiceService } from 'src/app/Services/filter-service.service';
import { JobTitleService } from 'src/app/Services/job-title.service';
import { OfficeService } from 'src/app/Services/office.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public departments;
  public offices;
  public jobTitles;
  public filteredEmployees;
  @Input() allEmployees;
  @Output() filteredEmployeesEmitter = new EventEmitter();
  constructor(private _filterService: FilterServiceService,private departmentService:DepartmentService
    , private officeService: OfficeService, private jobTitleService: JobTitleService) { }

  ngOnInit() {
    this.departmentService.getAllDepartments().subscribe(data => this.departments = data);
    this.officeService.getAllOffices().subscribe(data => this.offices = data);
    this.jobTitleService.getAllJobTitles().subscribe(data => this.jobTitles = data);
    this._filterService.getAllEmployees().subscribe(data => {this.allEmployees = data;
    });
  }
  action(categoryID){
    this.filteredEmployees = this.allEmployees.filter(emp=>emp.departmentID == categoryID || emp.jobTitleID == categoryID || emp.officeID == categoryID);
    this.filteredEmployeesEmitter.emit(this.filteredEmployees);
  }
  departmentCount(departmentID){
    return this.allEmployees.filter(emp => emp.departmentID == departmentID).length;
  }
  officeCount(officeID){
    return this.allEmployees.filter(emp => emp.officeID == officeID).length;
  }
  jobCount(jobID){
    return this.allEmployees.filter(emp => emp.jobTitleID == jobID).length;
  }
}
