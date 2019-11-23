import { Component, OnInit } from '@angular/core';
import { demodata } from './demodata';
@Component({
  selector: 'app-chartist',
  templateUrl: './chartist.component.html',
  styleUrls: ['./chartist.component.scss']
})
export class ChartistComponent implements OnInit {

  demodata;

  constructor() {
    this.demodata = demodata;
  }

  ngOnInit() {
  }

}
