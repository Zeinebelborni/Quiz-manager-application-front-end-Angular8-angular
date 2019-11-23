import { Component } from '@angular/core';

import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {HttpClient} from '@angular/common/http';
import{TranslateService} from '@ngx-translate/core'
import { SettingsService } from './helpers/settings.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(public settings: SettingsService, private router: Router, private activatedRoute: ActivatedRoute, private slimLoadingBarService: SlimLoadingBarService, private translate: TranslateService ) {

    this.router.events.subscribe((event: any) => {
      this.handleNavigation(event);

    });

    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
  
  handleNavigation(event: any) {
    if(event instanceof NavigationStart) {
      this.startLoading();
    }
    else if(event instanceof NavigationEnd) {
      this.completeLoading();
      const tree = this.router.parseUrl(this.router.url);
      if (tree.fragment) {
        const element = document.querySelector("#" + tree.fragment);
        if (element) { element.scrollIntoView(); }
      } else {
        window.scrollTo(0, 0);
      }

    }
  }
  startLoading() {
    this.slimLoadingBarService.start();
  }

  stopLoading() {
    this.slimLoadingBarService.stop();
  }

  completeLoading() {
    this.slimLoadingBarService.complete();
  }



 


}
