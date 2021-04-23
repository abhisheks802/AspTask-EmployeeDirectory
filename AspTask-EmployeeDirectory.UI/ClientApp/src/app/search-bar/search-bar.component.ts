import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import { FilterServiceService } from '../filter-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public filters : string[] = [];
  public searchText:string = '';
  public filteredEmployeeList;
  public searchFilter:string = "Preferred Name";
  public alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  @Input() public selectedEmp:any;
  @Output() public employeeEmitter = new EventEmitter();
  @Output() public callEmployeeForm = new EventEmitter();
  @Output() public searchCriteria = new EventEmitter<String>();
  @Output() public something = new EventEmitter();
  constructor(private _filterService: FilterServiceService) { 
    //this.filteredEmployeeList = this._filterService.displayList;
  }

  ngOnInit(): void {
  //this.employeeList = this._filterService.employeeList;
  this.filters = this._filterService.getFilters();
  }
  setLetter(alphabet) {
    if (this.searchFilter === "Preferred Name"){
  //  this._filterService.getAllEmployees(this._filterService.displayList.filter(emp=>emp.firstName.toLocaleLowerCase().startsWith(alphabet) || emp.lastName.toLocaleLowerCase().startsWith(alphabet)));
    }
    else if(this.searchFilter === "Department"){
  //    this._filterService.getAllEmployees(this._filterService.displayList.filter(emp=>emp.department.toLocaleLowerCase().startsWith(alphabet)));
    }
    else if(this.searchFilter === "Office"){
  //    this._filterService.getAllEmployees(this._filterService.displayList.filter(emp=>emp.office.toLocaleLowerCase().startsWith(alphabet)));
    }
    else if(this.searchFilter === "Job Title"){
  //    this._filterService.getAllEmployees(this._filterService.displayList.filter(emp=>emp.jobTitle.toLocaleLowerCase().startsWith(alphabet)));
    }
  }
  fireEvent(){
    this.selectedEmp = {firstName:"",lastName:"",email:"",jobTitle:"none",office:"none",department:"none",phoneNumber:"",skypeID:"",employeeID:"",preferredName:""};
    this.employeeEmitter.emit(this.selectedEmp);
    this.callEmployeeForm.emit(true);
  }
  searchEmp(searchText){
  //  this.filteredEmployeeList = this._filterService.displayList;
    if (searchText && this.searchFilter === "Preferred Name") {
      this.filteredEmployeeList = this.filteredEmployeeList.filter(emp => {
        return emp.preferredName.toLocaleLowerCase().match(searchText.toLocaleLowerCase());
      })
    }
    else if(searchText && this.searchFilter === "Department"){
      this.filteredEmployeeList = this.filteredEmployeeList.filter(emp => {
        return emp.department.toLocaleLowerCase().match(searchText.toLocaleLowerCase());
      })
    }
    else if(searchText && this.searchFilter === "Office"){
      this.filteredEmployeeList = this.filteredEmployeeList.filter(emp => {
        return emp.office.toLocaleLowerCase().match(searchText.toLocaleLowerCase());
      })
    }
    else if(searchText && this.searchFilter === "Job Title"){
      this.filteredEmployeeList = this.filteredEmployeeList.filter(emp => {
        return emp.jobTitle.toLocaleLowerCase().match(searchText.toLocaleLowerCase());
      })
    }
    else{
    //  this._filterService.getAllEmployees(this.filteredEmployeeList);
    }
    //this._filterService.getAllEmployees(this.filteredEmployeeList);
  }
  clearFilters(){
  //  this._filterService.getAllEmployees(this._filterService.employeeList);
  }
}
