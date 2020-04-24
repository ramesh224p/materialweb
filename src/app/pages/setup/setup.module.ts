import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAngularSelectModule } from 'material-angular-select';

import { ThemeModule } from 'theme';

import { BranchComponent } from './branch/branch.component';
import { SetupRoutingModule } from './setup-routing.module';
import { FinanceComponent } from './finance/finance.component';

@NgModule({
  declarations: [BranchComponent, FinanceComponent],
  imports: [
    CommonModule,
    SetupRoutingModule,
    MaterialAngularSelectModule,
    ThemeModule
  ]
})
export class SetupModule { }
