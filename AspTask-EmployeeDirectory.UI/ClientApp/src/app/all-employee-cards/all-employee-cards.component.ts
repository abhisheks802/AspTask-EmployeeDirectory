import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FilterServiceService } from '../filter-service.service';

@Component({
  selector: 'app-all-employee-cards',
  templateUrl: './all-employee-cards.component.html',
  styleUrls: ['./all-employee-cards.component.css']
})
export class AllEmployeeCardsComponent implements OnInit {

  public allEmployeeCards;
  @Input() public message:boolean = false;
  @Input() public allEmployees;
  @Output() public displayEmployeeForm = new EventEmitter();
  @Output() public employeeEmitter = new EventEmitter();
  @Output() public deleteButtonVisibility = new EventEmitter();
  constructor(private filterService: FilterServiceService) { }
  
  ngOnInit(): void {
    this.displayAllEmployees();
  }
  displayAllEmployees(){
    this.filterService.getAllEmployees().subscribe(data=> {this.allEmployees = data;
      console.log(this.allEmployees);
    })
  }
  displayEmployeeDetails(id){
    this.filterService.getAllEmployees().subscribe(data=> {this.allEmployees = data;
      var selectedEmployee = this.allEmployees.find(emp => emp.employeeID === id);
      this.employeeEmitter.emit(selectedEmployee);
    })
    this.message = true;
    this.displayEmployeeForm.emit(this.message);
    this.deleteButtonVisibility.emit(true);
  }
}
