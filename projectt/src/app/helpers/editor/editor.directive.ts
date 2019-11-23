import { Directive, OnInit, ElementRef } from '@angular/core';
declare var MediumEditor: any;
declare var $: any;
@Directive({
  selector: '[appEditor]'
})
export class EditorDirective implements OnInit {

  constructor(private ele: ElementRef) { }
  ngOnInit() {
    const editor = new MediumEditor(this.ele.nativeElement, {
      buttonLabels: 'fontawesome',
      placeholder: {
           text: 'Message',
           hideOnClick: true
       },
       toolbar: {
            buttons: ['bold', 'italic', 'ubderline', 'anchor', 'quote', 'h2',
             'h3', 'h4', 'orderedlist', 'unorderedlist', 'indent', 'outdent', 'colorPicker',
             'strikethrough', 'subscript', 'superscript', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
        },
    });
  }
}
