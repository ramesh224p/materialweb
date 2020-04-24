import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { CommonLayoutComponent } from 'app/layouts/common-layout';
import { LayoutsModule } from 'app/layouts';
import { IndentComponent } from './indent/indent.component';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';
import { ListIndentComponent } from './list-indent/list-indent.component';

@NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: '',
          component: CommonLayoutComponent, 
          children: [
            { path: 'acknowledgement', component:  AcknowledgementComponent},
            { path: 'inventory-details', component:  InventoryDetailsComponent},
            { path: 'list-indent', component:  ListIndentComponent},
            { path : 'indent', component: IndentComponent}
          ],
        },
      ]),
      LayoutsModule,
    ],
    exports: [RouterModule],
  })

export class InventoryRoutingModule { }
