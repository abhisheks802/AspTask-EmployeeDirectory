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
  public message = false;
  public empList:any;
  public selectedEmp:any;
  public allEmployees;
  constructor(){}
}
