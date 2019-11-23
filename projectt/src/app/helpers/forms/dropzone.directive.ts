import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';
import  * as Dropzone from 'dropzone/dist/dropzone-amd-module';
Dropzone.autoDiscover = false;
@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective implements OnInit {

  @HostBinding('class.dropzone') dropzone = true;

  constructor(private ele:ElementRef) { }
  ngOnInit() {
    const myDropzone = new Dropzone(this.ele.nativeElement, {
      url: "/file/upload",
      dictDefaultMessage: '<i class="fa fa-paperclip mr-2"></i> Drop Files or click here to upload'
    });
  }

}
