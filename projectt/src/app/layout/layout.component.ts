import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../helpers/settings.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public settings: SettingsService) { }

  ngOnInit() {
  }

}
