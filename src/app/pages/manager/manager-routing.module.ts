import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplaintsComponent } from './complaints/complaints.component';
import { CommonLayoutComponent } from 'app/layouts/common-layout';
import { LayoutsModule } from 'app/layouts';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: '',
          component: CommonLayoutComponent,
          children: [
            { path: 'employees', component: EmployeesComponent},
            { path: 'complaints', component:  ComplaintsComponent}
          ],
        },
      ]),
      LayoutsModule,
    ],
    exports: [RouterModule],
  })

export class ManagerRoutingModule { }
