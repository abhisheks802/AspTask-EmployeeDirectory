import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FilterServiceService } from 'src/app/filter-service.service';
import { Department } from 'src/Models/department';

@Component({
  selector: 'app-add-edit-departments',
  templateUrl: './add-edit-departments.component.html',
  styleUrls: ['./add-edit-departments.component.scss']
})
export class AddEditDepartmentsComponent implements OnInit {
  public departments;
  public errorMessage:string ="";
  @Input() selectedDepartment;
  @Input() public deleteButtonVisibility;
  @Output() public hideForm = new EventEmitter();
  @Output() public updateDepartmentsEmitter = new EventEmitter();
  constructor(private filterService: FilterServiceService) { }

  ngOnInit(): void {
  }
  checkIfEmpty(){
    if(this.selectedDepartment.departmentName.toString().trim() == ''){
      this.errorMessage = "Please fill all the fields";
    }
    else{
      this.addDepartment();
    }
  }
  addDepartment(){
    let department:Department = new Department();
    department.departmentName = this.selectedDepartment.departmentName;
    department.departmentStatus = "Active";
    this.filterService.getAllDepartments().subscribe(data => {this.departments = data
    var findDepartment = this.departments.find(dep => dep.departmentID == this.selectedDepartment.departmentID);
    if(findDepartment != null){
      department.departmentID = this.selectedDepartment.departmentID;
      this.filterService.updateDepartment(department).subscribe(res=>{
        this.updateDepartmentsEmitter.emit(department);
        this.cancelEvent();
      })
    }
    else{
      this.filterService.addDepartment(department).subscribe(res =>{
        this.cancelEvent();
        this.updateDepartmentsEmitter.emit(department);
      })
    }
  })
  }
  cancelEvent(){
    this.hideForm.emit(false);
  }
  deleteDepartment(){
    var depID = this.selectedDepartment.departmentID;
    this.filterService.deleteDepartment(depID).subscribe(res=>{
      this.updateDepartmentsEmitter.emit(depID);
      this.cancelEvent();
    })
  }
}
