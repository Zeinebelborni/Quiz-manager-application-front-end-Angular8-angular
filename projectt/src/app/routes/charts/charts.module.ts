import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartistComponent } from './chartist/chartist.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartHelpersModule } from '../../helpers/chart-helpers/chart-helpers.module';
import { CthreeComponent } from './cthree/cthree.component';
import { PlotlyComponent } from './plotly/plotly.component';

const routes: Routes = [
  { path: 'chartjs', component: ChartjsComponent },
  { path: 'chartist', component: ChartistComponent },
  { path: 'cthree', component: CthreeComponent },
  { path: 'plotly', component: PlotlyComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartHelpersModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [ChartjsComponent, ChartistComponent, CthreeComponent, PlotlyComponent]
})
export class ChartsModule { }
