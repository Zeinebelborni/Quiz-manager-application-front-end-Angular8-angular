import { Directive, Input, ElementRef, HostBinding, OnInit } from '@angular/core';
import { Utility } from '../utility';

declare var Plotly: any;
@Directive({
  selector: '[appPlotly]'
})
export class PlotlyDirective implements OnInit {
  el: ElementRef;
  native: any;
  @Input() appPlotly;
  @Input() layout;
  constructor (el: ElementRef) {
    this.el = el;
    this.native = el.nativeElement;
  }
  ngOnInit () {

    const data = this.appPlotly;
    let layout =  {

      margin: {
        l: 50,
        r: 30,
        b: 50,
        t: 40,
        pad: 4
      },
    };
    if(this.layout) {
      layout = Utility.mergeOverwrite(layout, this.layout);
    }
    Plotly.newPlot(this.native, data, layout);
  }

}
