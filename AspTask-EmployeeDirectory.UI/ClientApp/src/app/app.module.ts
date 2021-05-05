import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './Components/heading/heading.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { AddingEmployeesComponent } from './Components/adding-employees/adding-employees.component';
import { FilterServiceService } from './Services/filter-service.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { AllEmployeeCardsComponent } from './Components/all-employee-cards/all-employee-cards.component';
import { EmployeeCardComponent } from './Components/all-employee-cards/employee-card/employee-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './Components/heading/navigation-bar/navigation-bar.component';
import { ShowDepartmentsComponent } from './Components/departments/show-departments/show-departments.component';
import { AddEditDepartmentsComponent } from './Components/departments/add-edit-departments/add-edit-departments.component';
import { ShowOfficesComponent } from './Components/offices/show-offices/show-offices.component';
import { AddEditOfficesComponent } from './Components/offices/add-edit-offices/add-edit-offices.component';
import { ShowJobTitlesComponent } from './Components/job-titles/show-job-titles/show-job-titles.component';
import { AddEditJobTitleComponent } from './Components/job-titles/add-edit-job-title/add-edit-job-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    SidebarComponent,
    SearchBarComponent,
    AddingEmployeesComponent,
    AllEmployeeCardsComponent,
    EmployeeCardComponent,
    routingComponents,
    NavigationBarComponent,
    ShowDepartmentsComponent,
    AddEditDepartmentsComponent,
    ShowOfficesComponent,
    AddEditOfficesComponent,
    ShowJobTitlesComponent,
    AddEditJobTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [FilterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
