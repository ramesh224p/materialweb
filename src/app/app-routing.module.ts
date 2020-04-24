import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutsModule } from './layouts';
import { CommonLayoutComponent } from './layouts/common-layout';
import { ChartsComponent } from './pages/charts';
import { ComponentsComponent } from './pages/components';
import { DashboardComponent } from './pages/dashboard';
import { Dashboard2Component } from './pages/dashboard2';
import { FormsComponent } from './pages/forms';
import { LoginComponent } from './pages/pages/login';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { ReportsComponent } from './pages/reports/reports.component';


@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
        { path: 'app', component: CommonLayoutComponent, children: [
          { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
          { path: 'dashboard-custom', component: Dashboard2Component, pathMatch: 'full' },
          { path: 'attendance', component: AttendanceComponent, pathMatch: 'full' },
          { path: 'reports', component: ReportsComponent, pathMatch: 'full' },
       
          { path: '**', redirectTo: '/pages/404' },
        ] }, // add 'canActivate: AuthGuard' for catching unauth users
        { path: 'ui', loadChildren: './pages/ui/ui.module#UIModule' },
        { path: 'setup', loadChildren: './pages/setup/setup.module#SetupModule' },
        { path: 'manager', loadChildren: './pages/manager/manager.module#ManagerModule' },
        { path: 'inventory', loadChildren: './pages/inventory/inventory.module#InventoryModule' },
        { path: 'maps', loadChildren: './pages/maps/maps.module#MapsModule' },
        { path: '', loadChildren: './pages/pages/pages.module#PagesModule' },
        { path: '**', redirectTo: '/pages/404' },
      ],
      { useHash: true },
    ),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
