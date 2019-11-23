import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleNavDirective } from './collapsible-nav/collapsible-nav.directive';
import { CardDirective } from './card/card.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollbarDirective } from './scrollbar/scrollbar.directive';
import { FormsModule, EmailValidator } from '@angular/forms';
import { DropzoneDirective } from './forms/dropzone.directive';
import { SettingsService } from './settings.service';
import { FullCalendarDirective } from './calendar/full-calendar.directive';
import { FullCalendarEventDirective } from './calendar/full-calendar-event.directive';
import { CardFullScreenDirective } from './card/card-full-screen.directive';
import { CardCollapseDirective } from './card/card-collapse.directive';
import { EditorDirective } from './editor/editor.directive';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
  ],
  declarations: [
    CollapsibleNavDirective,
    CardDirective,
    ScrollbarDirective,
    DropzoneDirective,
    FullCalendarDirective,
    FullCalendarEventDirective,
    CardFullScreenDirective,
    CardCollapseDirective,
    EditorDirective

  ],
  exports: [
    CollapsibleNavDirective,
    CardDirective,
    NgbModule,
    ScrollbarDirective,
    FormsModule,
    EmailValidator,
    DropzoneDirective,
    FullCalendarDirective,
    FullCalendarEventDirective,
    CardFullScreenDirective,
    CardCollapseDirective,
    EditorDirective
  ],
  providers: [
    SettingsService
  ]
})
export class HelpersModule { }
