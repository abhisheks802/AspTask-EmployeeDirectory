import { Component, OnInit } from '@angular/core';
import { FilterServiceService } from '../filter-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public departments: string[] = [];
  public offices : string[] = [];
  public jobTitles : string[] = [];
  public allEmployees:any = [];
  public departmentsCount = 0;
  constructor(private _filterService: FilterServiceService) { }

  ngOnInit() {
    this.departments = this._filterService.getDepartments();
    this.offices = this._filterService.getOffices();
    this.jobTitles = this._filterService.getJobTitles();
    // this._filterService.getDepartmentCount("IT").subscribe(data=>{this.departmentsCount = data.length;
    // console.log()
    //})
  }
  action(category){
 //   this._filterService.getAllEmployees(this._filterService.displayList.filter(emp=>emp.department == category || emp.jobTitle==category || emp.office == category));
  //  console.log(this._filterService.displayList);
  }
  departmentCount(departmentName){
  //   this.departmentsCount = this._filterService.getDepartmentCount(departmentName).subscribe(data=>{this.departmentsCount = data.length;})
  //   console.log(this.departmentsCount);
  }
  officeCount(officeName){
   // return this._filterService.employeeList.filter(emp => emp.office == officeName).length;
  }
  jobCount(jobTitle){
   // return this._filterService.employeeList.filter(emp => emp.jobTitle == jobTitle).length;
  }
}
