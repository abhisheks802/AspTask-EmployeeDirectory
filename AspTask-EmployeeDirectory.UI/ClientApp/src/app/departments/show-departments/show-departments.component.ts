import { Component, Input ,OnInit, Output,EventEmitter } from '@angular/core';
import { FilterServiceService } from 'src/app/Services/filter-service.service';


@Component({
  selector: 'app-show-departments',
  templateUrl: './show-departments.component.html',
  styleUrls: ['./show-departments.component.scss']
})
export class ShowDepartmentsComponent implements OnInit {
  @Input() public departments;
  @Input() public message;
  @Output() public selectedDepartmentEmitter = new EventEmitter();
  @Output() public displayDepForm = new EventEmitter();
  @Output() public deleteButtonVisibility = new EventEmitter();
  constructor(private filterService: FilterServiceService) { }

  ngOnInit(): void {
    this.filterService.getAllDepartments().subscribe(dept => this.departments = dept);
  }
  displayDepartmentDetails(id){
    this.filterService.getAllDepartments().subscribe(data => {this.departments = data
     var selecteddepartment = this.departments.find(dep => dep.departmentID == id);
     this.selectedDepartmentEmitter.emit(selecteddepartment);
    })
    this.message = true;
    this.displayDepForm.emit(this.message);
    this.deleteButtonVisibility.emit(true);
  }
}
