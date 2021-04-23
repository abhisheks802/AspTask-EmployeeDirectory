import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { FilterServiceService } from '../filter-service.service';
import { Employee } from '../../assets/employee';

@Component({
  selector: 'app-adding-employees',
  templateUrl: './adding-employees.component.html',
  styleUrls: ['./adding-employees.component.css']
})
export class AddingEmployeesComponent implements OnInit {

  public departments : string[] = [];
  public offices : string[] = [];
  public jobTitles : string[] = [];
  public errorMessage:string = "";
  public allEmployees:any = [];
  @Input() public message:boolean = true;
  @Input() public selectedEmployee:any;
  @Output() public allEmployeesEmitter = new EventEmitter(); 
  @Output() public cancelEmployeeForm = new EventEmitter();
  constructor(private _filterService: FilterServiceService) {}
  ngOnInit(): void {
    this.departments = this._filterService.getDepartments();
    this.jobTitles = this._filterService.getJobTitles();
    this.offices = this._filterService.getOffices();
  }
  cancelEvent(){
    this.message = false;
    this.cancelEmployeeForm.emit(this.message);
  }
  emptyCheckString(attribute){
    try{
      if(attribute.toString().trim() == ''){
      return true;
      }
      else{
        return false;
      }
    }
    catch{
      this.errorMessage = "Please fill all the fields";
      return true;
    }
  }
  emptyCheckOptions(attribute){
    if(attribute == 'none'){
    return true;
    }
    else{
      return false;
    }
  }
  checkIfEmpty(){
    if(this.emptyCheckString(this.selectedEmployee.firstname) || this.emptyCheckString(this.selectedEmployee.lastname) || this.emptyCheckString(this.selectedEmployee.email) || 
      this.emptyCheckString(this.selectedEmployee.phoneNumber) || this.emptyCheckString(this.selectedEmployee.skypeID) || this.emptyCheckOptions(this.selectedEmployee.department) ||
      this.emptyCheckOptions(this.selectedEmployee.office) || this.emptyCheckOptions(this.selectedEmployee.jobTitle)){
      this.errorMessage = "Please fill all the fields";
     }
     else{
       this.createEmployee();
       this.displayEmployees();
     }
  }
  createEmployee(){
    let employee:Employee = new Employee();
    employee.firstname = this.selectedEmployee.firstname;
    employee.lastname = this.selectedEmployee.lastname;
    employee.email = this.selectedEmployee.email;
    employee.department = this.selectedEmployee.department;
    employee.office = this.selectedEmployee.office;
    employee.jobTitle = this.selectedEmployee.jobTitle;
    employee.phoneNumber = this.selectedEmployee.phoneNumber;
    employee.skypeID = this.selectedEmployee.skypeID;
    employee.preferredName = employee.firstname + " " +employee.lastname; 
    this._filterService.getAllEmployees().subscribe(data => {this.allEmployees = data;
    var x = this.allEmployees.find(emp => emp.employeeID == this.selectedEmployee.employeeID);
    if(x!=null){
      employee.employeeID = this.selectedEmployee.employeeID;
      this._filterService.updateEmployee(employee).subscribe(res=>{
        console.log(res.toString());
      })
    }
    else{
      this._filterService.addEmployee(employee).subscribe(res=>{
        console.log(res.toString());
      })
    }
    })
    this.cancelEvent();
  }
  displayEmployees(){
    this._filterService.getAllEmployees().subscribe(data => {this.allEmployees = data;
      this.allEmployeesEmitter.emit(this.allEmployees);
    })
  }
}
