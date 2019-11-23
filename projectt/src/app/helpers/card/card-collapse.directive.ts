import { Directive, HostListener } from '@angular/core';
import { CardDirective } from './card.directive';
@Directive({
  selector: '[appCardCollapse]'
})
export class CardCollapseDirective {

  constructor(private card: CardDirective) { }
  @HostListener('click') click() {
    this.card.toggleCollapse();
  }

}
