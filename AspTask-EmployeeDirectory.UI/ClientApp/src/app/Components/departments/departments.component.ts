import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';

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
  constructor(private departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.updateDepartments()
  }
  addDepartment(){
    this.message = true;
    this.selectedDepartment = {departmentName: "",deparmentID: 0};  
    this.deleteButtonVisibility = false;
  }
  updateDepartments(){
    this.departmentService.getAllDepartments().subscribe(data =>this.departments = data);
  }
}
