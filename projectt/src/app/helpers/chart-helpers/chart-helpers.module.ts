import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartistDirective } from './chartist.directive';
import { ChartjsDirective } from './chartjs.directive';
import { C3Directive } from './c3.directive';
import { PlotlyDirective } from './plotly.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChartistDirective, ChartjsDirective, C3Directive, PlotlyDirective],
  exports: [
    ChartjsDirective,
    ChartistDirective,
    C3Directive,
    PlotlyDirective
  ]
})
export class ChartHelpersModule { }
