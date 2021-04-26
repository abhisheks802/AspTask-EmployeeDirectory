import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
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
  public filteredEmployees;
  @Input() allEmployees;
  @Output() filteredEmployeesEmitter = new EventEmitter();
  constructor(private _filterService: FilterServiceService) { }

  ngOnInit() {
    this.departments = this._filterService.getDepartments();
    this.offices = this._filterService.getOffices();
    this.jobTitles = this._filterService.getJobTitles();
    this._filterService.getAllEmployees().subscribe(data => {this.allEmployees = data;
    });
  }
  action(category){
    this.filteredEmployees = this.allEmployees.filter(emp=>emp.department === category || emp.jobTitle===category || emp.office === category);
    this.filteredEmployeesEmitter.emit(this.filteredEmployees);
  }
  departmentCount(departmentName){
    return this.allEmployees.filter(emp => emp.department === departmentName).length;
  }
  officeCount(officeName){
    return this.allEmployees.filter(emp => emp.office === officeName).length;
  }
  jobCount(jobTitle){
    return this.allEmployees.filter(emp => emp.jobTitle === jobTitle).length;
  }
}
