import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchComponent } from './branch/branch.component';
import { CommonLayoutComponent } from 'app/layouts/common-layout';
import { LayoutsModule } from 'app/layouts';
import { FinanceComponent } from './finance/finance.component';

@NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: '',
          component: CommonLayoutComponent,
          children: [
            { path: 'branches', component:  BranchComponent},
            { path: 'finances', component: FinanceComponent}
          ],
        },
      ]),
      LayoutsModule,
    ],
    exports: [RouterModule],
  })

export class SetupRoutingModule { }
