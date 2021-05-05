import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { JobTitlesComponent } from './job-titles/job-titles.component';
import { OfficesComponent } from './offices/offices.component';

const routes: Routes = [
  {path: 'departments',component:DepartmentsComponent},
  {path: 'offices',component:OfficesComponent},
  {path: 'jobTitles',component:JobTitlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentsComponent,OfficesComponent,JobTitlesComponent];