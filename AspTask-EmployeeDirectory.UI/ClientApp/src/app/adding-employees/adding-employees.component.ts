import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { FilterServiceService } from '../Services/filter-service.service';
import { Employee } from '../../assets/employee';

@Component({
  selector: 'app-adding-employees',
  templateUrl: './adding-employees.component.html',
  styleUrls: ['./adding-employees.component.css']
})
export class AddingEmployeesComponent implements OnInit {
  
  public departments;
  public offices;
  public jobTitles;
  public departmentName:string="none";
  public jobName:string="none";
  public officeName:string="none";
  public errorMessage:string = "";
  public allEmployees:any = [];
  @Input() public message:boolean = true;
  @Input() public deleteButtonVisibility;
  @Input() public selectedEmployee:any;
  @Output() public updateEmployeesEmitter = new EventEmitter(); 
  @Output() public cancelEmployeeForm = new EventEmitter();
  constructor(private _filterService: FilterServiceService) {}
  ngOnInit(): void {
    this._filterService.getAllDepartments().subscribe(data=> {this.departments = data
    this.departmentName = this.departments.find(dep => dep.departmentID == this.selectedEmployee.departmentID).departmentName;
    });
    this._filterService.getAllJobTitles().subscribe(data=> {this.jobTitles = data
    this.jobName = this.jobTitles.find(job => job.jobID == this.selectedEmployee.jobTitleID).jobName;
    });
    this._filterService.getAllOffices().subscribe(data=> {this.offices = data
      this.officeName = this.offices.find(off => off.officeID == this.selectedEmployee.officeID).officeName;
    });
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
     }
  }
  createEmployee(){
    var departmentID = this.departments.find(dep => dep.departmentName == this.departmentName ).departmentID;
    var jobID = this.jobTitles.find(job => job.jobName == this.jobName).jobID;
    var officeID = this.offices.find(off => off.officeName == this.officeName).officeID;
    let employee:Employee = new Employee();
    employee.firstname = this.selectedEmployee.firstname;
    employee.lastname = this.selectedEmployee.lastname;
    employee.email = this.selectedEmployee.email;
    employee.departmentID = departmentID;
    employee.officeID = officeID;
    employee.jobTitleID = jobID;
    employee.phoneNumber = this.selectedEmployee.phoneNumber;
    employee.skypeID = this.selectedEmployee.skypeID;
    employee.preferredName = employee.firstname + " " +employee.lastname; 
    employee.employeeStatus = "Active";
    this._filterService.getAllEmployees().subscribe(data => {this.allEmployees = data;
    var findEmployee = this.allEmployees.find(emp => emp.employeeID == this.selectedEmployee.employeeID);
    if(findEmployee!=null){
      employee.employeeID = this.selectedEmployee.employeeID;
      this._filterService.updateEmployee(employee).subscribe(res=>{
        this.updateEmployeesEmitter.emit(employee);
        this.cancelEvent();
      })
    }
    else{
      this._filterService.addEmployee(employee).subscribe(res=>{
        this.updateEmployeesEmitter.emit(employee);
        this.cancelEvent();
      })
    }
    })
  }
  deleteEmployee(){
    var employeeID = this.selectedEmployee.employeeID;
    this._filterService.deleteEmployee(employeeID).subscribe(res =>{
      this.updateEmployeesEmitter.emit(employeeID);
      this.cancelEvent();
    })
  }
}
