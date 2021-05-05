import { Component,Output,EventEmitter} from '@angular/core';
import { FilterServiceService } from './filter-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'employee-directory';
  public cancelMessage = true;
  public message = false;
  public empList:any;
  public selectedEmp:any;
  public allEmployees;
  public deleteButtonVisibility:boolean = true;
  constructor(private filterService: FilterServiceService,public router: Router ){}
  updateEmployees(){
    this.filterService.getAllEmployees().subscribe(data => {this.allEmployees = data;
    })
  }
  filterEmployees(filteredEmployees){
      this.allEmployees = filteredEmployees; 
  }
}
