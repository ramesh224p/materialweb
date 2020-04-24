import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAngularSelectModule } from 'material-angular-select';

import { ThemeModule } from 'theme/theme.module';

import { ComplaintsComponent } from './complaints/complaints.component';
import { EmployeesComponent } from './employees/employees.component';
import { ManagerRoutingModule } from './manager-routing.module';

@NgModule({
  declarations: [ComplaintsComponent, EmployeesComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialAngularSelectModule,
    ThemeModule
  ]
})
export class ManagerModule { }
