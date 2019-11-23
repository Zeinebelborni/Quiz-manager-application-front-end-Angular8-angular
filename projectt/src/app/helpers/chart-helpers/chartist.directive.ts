import { Directive, OnInit, ElementRef, Input, HostBinding } from '@angular/core';
import * as Chartist from 'chartist';
import { Utility } from '../utility';
@Directive({
  selector: '[appChartist]'
})
export class ChartistDirective implements OnInit {

  @HostBinding('class') eleClass = 'ct-chart ct-major-sixth';
  @Input() appChartist: string;
  @Input() chartdata;
  @Input() options;
  ele: ElementRef;
  chart: Chartist;
  native: any;
  constructor(ele: ElementRef) {
    this.ele = ele;
    this.native = ele.nativeElement;
  }
  ngOnInit() {

    const data = this.chartdata;

    switch (this.appChartist) {
      case 'bar':
        this.renderBarChart(data);
        break;
      case 'line':
        this.renderLineChart(data);
        break;
      case 'area':
        this.renderAreaChart(data);
        break;
      case 'pie':
        this.renderPieChart(data);
        break;
      case 'scatter':
        this.renderScatterChart(data);
        break;
      default:
      this.renderLineChart(data);
    }

  }
  renderLineChart(data) {
    const options = {
      fullWidth: true
    }
    this.chart = new Chartist.Line(this.native, data, options);
  }
  renderAreaChart(data) {
    let options = {

      fullWidth: true,
      showArea: true,
    };

    if(this.options) {
      options = Utility.mergeOverwrite(options, this.options);
    }
    this.chart = new Chartist.Line(this.native, data, options);
  }
  renderBarChart(data) {
    const options = {
      seriesBarDistance: 35
    };
    this.chart = new Chartist.Bar(this.native, data, options);
  }
  renderPieChart(data) {
    this.chart = new Chartist.Pie(this.native, data);
  }
  renderScatterChart(data) {
    const options = {
      showLine: false,
    }
    this.chart = new Chartist.Line(this.native, data, options);
  }

}
