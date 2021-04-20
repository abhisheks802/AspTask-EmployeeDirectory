import { Component,Output,EventEmitter} from '@angular/core';
import { FilterServiceService } from './filter-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'employee-directory';
  public cancelMessage = true;
  public sendingText = '';
  public message = false;
  public filteredEmployeeList;
  public empList:any;
  @Output() public searching = new EventEmitter();
  public formNotVisible = {
    "content-visibility": this.message,
  }
  constructor(private _filterService: FilterServiceService){}
}
