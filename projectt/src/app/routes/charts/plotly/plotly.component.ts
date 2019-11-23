import { Component, OnInit } from '@angular/core';
import { demodata } from './demodata';
@Component({
  selector: 'app-plotly',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.scss']
})
export class PlotlyComponent implements OnInit {
  demodata = demodata;
  constructor() { }

  ngOnInit() {
  }

}
