import { Component, OnInit } from '@angular/core';
import { FilterServiceService } from 'src/app/Services/filter-service.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  public routes;
  constructor(private _filterService: FilterServiceService) { }

  ngOnInit(): void {
    this.routes = this._filterService.getRoutes();
  }

}
