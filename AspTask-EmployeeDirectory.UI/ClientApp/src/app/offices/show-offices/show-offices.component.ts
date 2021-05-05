import { Component,Output,EventEmitter, Input, OnInit } from '@angular/core';
import { FilterServiceService } from 'src/app/Services/filter-service.service';

@Component({
  selector: 'app-show-offices',
  templateUrl: './show-offices.component.html',
  styleUrls: ['./show-offices.component.scss']
})
export class ShowOfficesComponent implements OnInit {
  @Input() public offices;
  @Input() public message;
  @Output() public selectedOfficeEmitter = new EventEmitter();
  @Output() public displayOfcForm = new EventEmitter();
  @Output() public deleteButtonVisibility = new EventEmitter();
  constructor(private filterService: FilterServiceService) { }

  ngOnInit(): void {
    this.filterService.getAllOffices().subscribe(ofc => this.offices = ofc);
  }
  displayOfficeDetails(id){
    this.filterService.getAllOffices().subscribe(data => {this.offices = data
     var selectedoffice = this.offices.find(ofc => ofc.officeID == id);
     this.selectedOfficeEmitter.emit(selectedoffice);
    })
    this.message = true;
    this.displayOfcForm.emit(this.message);
    this.deleteButtonVisibility.emit(true);
  }
}
