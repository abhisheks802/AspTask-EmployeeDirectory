import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { FilterServiceService } from 'src/app/filter-service.service';
import { Office } from 'src/app/Models/office';

@Component({
  selector: 'app-add-edit-offices',
  templateUrl: './add-edit-offices.component.html',
  styleUrls: ['./add-edit-offices.component.scss']
})
export class AddEditOfficesComponent implements OnInit {
  public offices;
  public errorMessage:string = "";
  @Input() selectedOffice;
  @Output() public hideForm = new EventEmitter();
  @Input() public deleteButtonVisibility;
  @Output() public updateOfficesEmitter = new EventEmitter();
  constructor(private filterService: FilterServiceService) { }

  ngOnInit(): void {
  }
  checkIfEmpty(){
    if(this.selectedOffice.officeName.toString().trim() == ''){
      this.errorMessage = "Please fill all the fields";
    }
    else{
      this.addOffice();
    }
  }
  addOffice(){
    let office:Office = new Office();
    office.officeName = this.selectedOffice.officeName;
    office.officeStatus = "Active";
    this.filterService.getAllOffices().subscribe(data => {this.offices = data
      var findOffice = this.offices.find(ofc => ofc.officeID == this.selectedOffice.officeID);
      if(findOffice != null){
        office.officeID = this.selectedOffice.officeID;
        this.filterService.updateOffice(office).subscribe(res=>{
          this.updateOfficesEmitter.emit(office);
          this.cancelEvent();
        })
      }
      else{
        this.filterService.addOffices(office).subscribe(res =>{
          this.cancelEvent();
          this.updateOfficesEmitter.emit(office);
        })
      }
    })
  }
  cancelEvent(){
    this.hideForm.emit(false);
  }
  deleteOffice(){
    var ofcID = this.selectedOffice.officeID;
    this.filterService.deleteOffice(ofcID).subscribe(res=>{
      this.updateOfficesEmitter.emit(ofcID);
      this.cancelEvent();
    })
  }
}
