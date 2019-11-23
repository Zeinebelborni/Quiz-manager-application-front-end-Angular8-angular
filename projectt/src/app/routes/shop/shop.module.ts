import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan/plan.component';
import { RouterModule, Routes } from '@angular/router';
import { HelpersModule } from '../../helpers/helpers.module';
import { PricingComponent } from './pricing/pricing.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

const routes: Routes = [
  { path: 'plan', component: PlanComponent, data: { title: 'Plan' }  },
  { path: 'pricing', component: PricingComponent, data: { title: 'Pricing' }  }
];
@NgModule({
  imports: [
    CommonModule,
    HelpersModule,
    RouterModule.forChild( routes ),
    DragDropModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [PlanComponent, PricingComponent]
})
export class ShopModule { }
