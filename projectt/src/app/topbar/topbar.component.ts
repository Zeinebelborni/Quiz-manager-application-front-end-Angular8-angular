
import {filter} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SettingsService } from '../helpers/settings.service';

declare var $:any;
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  searchCollapsed = true;
  title = "Home";
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public settings: SettingsService) {
  }

  ngOnInit() {
  this.routeChange(this.activatedRoute);
  this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(() => this.routeChange(this.activatedRoute))
  }

  routeChange(route: ActivatedRoute) {
    while(route.firstChild) route = route.firstChild;
    let data = route.data
    data.subscribe((d)=> {
      this.title = d.title || "Home";
    });
  }
  toggleSidebar() {
    this.settings.sidebar.left.collapsed = !this.settings.sidebar.left.collapsed;
  }
  toggleSidebarVisibility() {
    this.settings.sidebar.left.visible = !this.settings.sidebar.left.visible;
  }
  toggleSettingsVisibility() {
    this.settings.sidebar.right.visible = !this.settings.sidebar.right.visible;
  }
  toggleSearch() {
    this.searchCollapsed = !this.searchCollapsed;
    if(!this.searchCollapsed) {
      $('.topbar-search').focus();
    } else {
      $('.topbar-search').blur();
    }
  }

}
