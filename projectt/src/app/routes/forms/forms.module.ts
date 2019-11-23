import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpersModule } from '../../helpers/helpers.module';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { DateComponent } from './date/date.component';
import { CustomComponent } from './custom/custom.component';
const routes: Routes = [
  { path: '', redirectTo: '/forms/basic', pathMatch: 'full' },
  { path: 'basic', component: BasicComponent },
  { path: 'custom', component: CustomComponent },
  { path: 'typeahead', component: TypeaheadComponent },
  { path: 'date', component: DateComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HelpersModule
  ],
  declarations: [BasicComponent, TypeaheadComponent, DateComponent, CustomComponent]
})
export class FormsModule { }
