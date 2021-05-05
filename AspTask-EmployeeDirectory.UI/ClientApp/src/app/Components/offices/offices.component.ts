import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/Services/office.service';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {

  public message = false;
  public selectedOffice;
  public offices;
  public deleteButtonVisibility:boolean = true;
  constructor(private officeService: OfficeService) { }

  ngOnInit(): void {
  }
  addOffice(){
    this.message = true;
    this.selectedOffice = {officeName: "",officeID: 0};  
    this.deleteButtonVisibility = false;
  }
  updateOffices(){
    this.officeService.getAllOffices().subscribe(data =>this.offices = data);

  }
}
