import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeAddComponent} from './employee-add/employee-add.component'
const routes: Routes = [
  {
    path:'employee/create',
    component:EmployeeAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
