import { Directive, Input, OnChanges, ElementRef, HostListener } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appCollapsibleNav]',
})
export class CollapsibleNavDirective {

  @Input() appColor: string;


  constructor( public el: ElementRef  ) {

  }

  @HostListener('click', ['$event']) navClick(event) {

    const target = event.target;
    let targetLink;
    if (target.nodeName.toLowerCase() === 'li') {

      targetLink = target;


    } else if (target.parentNode.nodeName.toLowerCase() === 'li') {

      targetLink = target.parentNode;


    } else if ( target.parentNode.parentNode.nodeName.toLowerCase() === 'li' ) {

      targetLink = target.parentNode.parentNode;

    }  else if ( target.parentNode.parentNode.parentNode.nodeName.toLowerCase() === 'li' ) {

      targetLink = target.parentNode.parentNode.parentNode;

    }
    if (targetLink) {
      return this.linkClicked(targetLink);
    }
    return true;
  }
  linkClicked(el) {

    const element = $(el);

    if (element.children('ul').length > 0) {

      if (element.hasClass('active')) {
        this.close(element);
      } else {
        this.open(element);
      }
      return false;
    }
    this.open(element);
    return true;

  }
  open(element) {

    let list = element.children('ul');
    let height = list.prop('scrollHeight');
    const self = this;
    if(list.length > 0) {
      list.animate(
        {
          height: height,
        },
        200,
        function() {
          element.addClass('active');
        }
      );
    } else {
        element.addClass('active');
    }
    const siblings = element.siblings('li');
    siblings.each(function(){
      self.close($(this));
    });
  }
  close(element) {

    let list = element.children('ul');
    if(list.length > 0) {
      list.animate(
        {
          height: 0,
        },
        200,
        function() {
          element.removeClass('active');
          const children = element.find('active');
          children.removeClass('active');
        }
      );
    } else {
      element.removeClass('active');
    }



  }

}
