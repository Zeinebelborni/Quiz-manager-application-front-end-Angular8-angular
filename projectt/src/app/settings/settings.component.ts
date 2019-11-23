import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../helpers/settings.service';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public settings: SettingsService , private translate: TranslateService) {

    translate.setDefaultLang('en');
   }

   switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
  }
  toggleSettingsVisibility() {
    this.settings.sidebar.right.visible = !this.settings.sidebar.right.visible;
  }
}
