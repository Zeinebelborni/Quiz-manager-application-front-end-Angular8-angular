import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {DragDropModule} from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})

export class PricingComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
