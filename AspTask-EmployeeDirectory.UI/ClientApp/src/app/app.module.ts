import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AddingEmployeesComponent } from './adding-employees/adding-employees.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { FilterServiceService } from './filter-service.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    SidebarComponent,
    SearchBarComponent,
    AddingEmployeesComponent,
    EmployeeCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FilterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
