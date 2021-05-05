import { Component, OnInit } from '@angular/core';
import { FilterServiceService } from 'src/app/Services/filter-service.service';


@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  user:any;
  constructor(private _filterService: FilterServiceService) {}
  ngOnInit(): void {
    this.user = this._filterService.user;
  }
}
