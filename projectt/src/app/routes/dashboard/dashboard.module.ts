import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartHelpersModule } from '../../helpers/chart-helpers/chart-helpers.module';
import { HelpersModule } from '../../helpers/helpers.module'



const routes: Routes = [
  { path: 'pro', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard/pro', pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
    ChartHelpersModule,
    HelpersModule

  ],
  exports: [
    RouterModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
