import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
@Directive({
  selector: '[appScrollbar]'
})
export class ScrollbarDirective implements OnInit {
  @Input() appScrollbar;
  @Input() currentPosition;
  el: ElementRef;
  native;

  constructor( el: ElementRef ) {
    this.el = el;
    this.native = el.nativeElement;
  }
  ngOnInit() {

    const ps = new PerfectScrollbar(this.native, { suppressScrollX: true });
    if(this.currentPosition == "end") {
      this.native.scrollTop = this.native.scrollHeight;
    }

  }

}
