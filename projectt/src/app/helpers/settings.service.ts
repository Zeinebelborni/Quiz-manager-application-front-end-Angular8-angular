import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  sidebar = {
    left:{
      visible: false,
      collapsed: false,
      fixed: true,
      background: 'dark',
      accent: 'info'
    },
    right: {
      visible: false,
      collapsed: false
    }
  };
  topbar = {
    fixed: true
  }
  constructor() { }

  toggleSidebarVisibility(direction: string = 'left') {
    if(direction == 'left' || direction == 'right') {
      this.sidebar[direction].visible = !this.sidebar[direction].visible;
    }
  }
  showSidebar(direction: string = 'left') {
    if(direction == 'left' || direction == 'right') {
      this.sidebar[direction].visible = true;
    }
  }
  hideSidebar(direction: string = 'left') {
    if(direction == 'left' || direction == 'right') {
      this.sidebar[direction].visible = false;
    }
  }
  toggleSidebarCollapse(direction: string = 'left') {
    if(direction == 'left' || direction == 'right') {
      this.sidebar[direction].collapsed = !this.sidebar[direction].collapsed;
    }
  }
  collapseSidebar(direction: string = 'left') {
    if(direction == 'left' || direction == 'right') {
      this.sidebar[direction].collapsed = true;
    }
  }
  expandSidebar(direction: string = 'left') {
    if(direction == 'left' || direction == 'right') {
      this.sidebar[direction].collapsed = false;
    }
  }
  setSidebarTheme(bg, accent) {
    this.sidebar.left.background = bg;
    this.sidebar.left.accent = accent;

  }
  toggleFixedSidebar() {
    if(this.sidebar.left.fixed) {
      this.sidebar.left.fixed = false;
      this.topbar.fixed = false;
    } else {
      this.sidebar.left.fixed = true;
    }
  }
  toggleFixedTopbar() {
    if(this.topbar.fixed) {
      this.topbar.fixed = false;
    } else {
      if(this.sidebar.left.fixed) {
        this.topbar.fixed = true;
      }
    }
  }

}
