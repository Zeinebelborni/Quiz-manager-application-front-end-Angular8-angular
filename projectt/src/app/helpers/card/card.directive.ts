import { Directive, Input, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCard]',
  exportAs: 'card'
})
export class CardDirective {

  @HostBinding('class.card-collapsed') isCollapsed = false;
  @HostBinding('class.card-fullscreen') isFullScreen = false;
  @Input() initialCollapseState = false;
  @Input() initialFullScreenState = false;

  constructor(ele: ElementRef) {
    this.isCollapsed = this.initialCollapseState;
    this.isFullScreen = this.initialFullScreenState;
  }
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
  }

}
