import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import { FilterServiceService } from 'src/app/Services/filter-service.service';
import { DepartmentService } from 'src/app/Services/department.service';
import { OfficeService } from 'src/app/Services/office.service';
import { JobTitleService } from 'src/app/Services/job-title.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public filters : string[] = [];
  public departments;
  public jobTitles;
  public offices;
  public searchText:string = '';
  public allEmployees;
  public searchFilter:string = "Preferred Name";
  public alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  public filteredEmployees;
  @Input() public selectedEmp:any;
  @Output() filteredEmployeesEmitter = new EventEmitter();
  @Output() deleteButtonVisibility = new EventEmitter();
  @Output() public employeeEmitter = new EventEmitter();
  @Output() public callEmployeeForm = new EventEmitter();
  @Output() clearFilter = new EventEmitter();
  constructor(private _filterService: FilterServiceService, private departmentService:DepartmentService
    , private officeService: OfficeService, private jobTitleService: JobTitleService) { }

  ngOnInit(): void {
  this.filters = this._filterService.getFilters();
  this.departmentService.getAllDepartments().subscribe(data=> {this.departments = data});
  this.jobTitleService.getAllJobTitles().subscribe(data=> {this.jobTitles = data});
  this.officeService.getAllOffices().subscribe(data=> {this.offices = data});  
  }
  setLetter(alphabet) {
    if (this.searchFilter === "Preferred Name"){
        this._filterService.getAllEmployees().subscribe(data => {this.allEmployees = data;
          this.filteredEmployees = this.allEmployees.filter(emp=>emp.firstname.toLocaleLowerCase().startsWith(alphabet) || emp.lastname.toLocaleLowerCase().startsWith(alphabet));
          this.filteredEmployeesEmitter.emit(this.filteredEmployees);
         });
      }
    else if(this.searchFilter === "Department"){
      var department = this.departments.find(dep => dep.departmentName.toLocaleLowerCase().startsWith(alphabet)).departmentID;
      this._filterService.getAllEmployees().subscribe(data => {this.allEmployees = data;
      this.filteredEmployees = this.allEmployees.filter(emp=>emp.departmentID == department);
      this.filteredEmployeesEmitter.emit(this.filteredEmployees);
   });
    }
    else if(this.searchFilter === "Office"){
      var office = this.offices.find(ofc => ofc.officeName.toLocaleLowerCase().startsWith(alphabet)).officeID;
        this._filterService.getAllEmployees().subscribe(data => {this.allEmployees = data;
        this.filteredEmployees = this.allEmployees.filter(emp=>emp.officeID == office);
        this.filteredEmployeesEmitter.emit(this.filteredEmployees);
      });
    }
    else if(this.searchFilter === "Job Title"){
      var jobTitle = this.jobTitles.find( job => job.jobName.toLocaleLowerCase().startsWith(alphabet)).jobID;
        this._filterService.getAllEmployees().subscribe(data => {this.allEmployees = data;
        this.filteredEmployees = this.allEmployees.filter(emp=>emp.jobTitleID == jobTitle);
        this.filteredEmployeesEmitter.emit(this.filteredEmployees);
    });
    }
  }
  fireEvent(){
    this.selectedEmp = {firstName:"",lastName:"",email:"",jobTitleID:0,officeID:0,departmentID:0,phoneNumber:"",skypeID:"",employeeID:"",preferredName:""};
    this.employeeEmitter.emit(this.selectedEmp);
    this.deleteButtonVisibility.emit(false);
    this.callEmployeeForm.emit(true);
  }
  searchEmp(searchText){
    this._filterService.getAllEmployees().subscribe(data => {this.allEmployees = data;
    if (searchText && this.searchFilter === "Preferred Name") {
      this.filteredEmployees = this.allEmployees.filter(emp => {
        return emp.preferredName.toLocaleLowerCase().match(searchText.toLocaleLowerCase());
      })
    }
    else if(searchText && this.searchFilter === "Department"){
      this.filteredEmployees = this.allEmployees.filter(emp => {
        return emp.department.toLocaleLowerCase().match(searchText.toLocaleLowerCase());
      })
    }
    else if(searchText && this.searchFilter === "Office"){
      this.filteredEmployees = this.allEmployees.filter(emp => {
        return emp.office.toLocaleLowerCase().match(searchText.toLocaleLowerCase());
      })
    }
    else if(searchText && this.searchFilter === "Job Title"){
      this.filteredEmployees = this.allEmployees.filter(emp => {
        return emp.jobTitle.toLocaleLowerCase().match(searchText.toLocaleLowerCase());
      })
    }
    else{
        this.filteredEmployeesEmitter.emit(this.filteredEmployees);
    }
    this.filteredEmployeesEmitter.emit(this.filteredEmployees);
  })
  }
  clearFilters(){
    this.searchText='';
    this.clearFilter.emit();
  }
}
