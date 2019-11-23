import { Directive, HostListener } from '@angular/core';
import { CardDirective } from './card.directive';
@Directive({
  selector: '[appCardFullScreen]'
})

export class CardFullScreenDirective {

  constructor(private card: CardDirective) {  }

  @HostListener('click') click() {
    this.card.toggleFullScreen();
  }

}
