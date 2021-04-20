import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Employee } from 'src/assets/employee';
import { FilterServiceService } from '../filter-service.service';


@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {  
  public allEmployees:any = [];
  @Input() public message:boolean = false;
  @Output() public displayEmployeeForm = new EventEmitter();
  constructor(private filterService: FilterServiceService) { }
  
  ngOnInit(): void {
    this.displayAllEmployees();
  }
  displayAllEmployees(){
    this.filterService.getAllEmployees().subscribe(data=> {this.allEmployees = data
    console.log(this.allEmployees);
    })
  }
  displayEmployeeDetails(id){
    this.filterService.getAllEmployees().subscribe(data=> {this.allEmployees = data;
      console.log(this.allEmployees);
      var selectedEmployee = this.allEmployees.filter(emp => emp.employeeID == id)[0];
      this.filterService.selectedEmployee = selectedEmployee;
    })
    this.message = true;
    this.displayEmployeeForm.emit(this.message);
  }
}