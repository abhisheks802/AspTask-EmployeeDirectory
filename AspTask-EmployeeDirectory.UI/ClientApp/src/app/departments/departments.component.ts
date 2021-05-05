import { Component, OnInit } from '@angular/core';
import { FilterServiceService } from '../filter-service.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  public departments;
  public message = false;
  public selectedDepartment;
  public deleteButtonVisibility:boolean = true;
  constructor(private filterService: FilterServiceService) { }

  ngOnInit(): void {
    this.updateDepartments()
  }
  addDepartment(){
    this.message = true;
    this.selectedDepartment = {departmentName: "",deparmentID: 0};  
    this.deleteButtonVisibility = false;
  }
  updateDepartments(){
    this.filterService.getAllDepartments().subscribe(data =>this.departments = data);
  }
}
