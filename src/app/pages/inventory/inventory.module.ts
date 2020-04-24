import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAngularSelectModule } from 'material-angular-select';

import { ThemeModule } from 'theme';

import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';
import { ListIndentComponent } from './list-indent/list-indent.component';
import { IndentComponent } from './indent/indent.component';

@NgModule({
  declarations: [AcknowledgementComponent, InventoryDetailsComponent, ListIndentComponent, IndentComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MaterialAngularSelectModule,
    ThemeModule
  ]
})
export class InventoryModule { }
