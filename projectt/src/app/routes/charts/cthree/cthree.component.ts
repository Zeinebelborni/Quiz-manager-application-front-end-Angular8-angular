import { Component, OnInit } from '@angular/core';
import { demodata } from './demodata';
@Component({
  selector: 'app-cthree',
  templateUrl: './cthree.component.html',
  styleUrls: ['./cthree.component.scss']
})
export class CthreeComponent implements OnInit {
  demodata = demodata;
  constructor() { }

  ngOnInit() {
  }

}
