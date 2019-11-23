import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { DataComponent } from './data/data.component';
import { RouterModule, Routes } from '@angular/router';
import { HelpersModule } from '../../helpers/helpers.module';
import { DataTablesModule } from 'angular-datatables';
import { ResponsiveComponent } from './responsive/responsive.component';
const routes: Routes = [
  { path: 'data', component: DataComponent, data: { title: 'Datatable' } },
  { path: 'responsive', component: ResponsiveComponent, data: { title: 'Responsive Table' } },
  { path: 'basic', component: BasicComponent, data: { title: 'Basic Tables' } },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HelpersModule,
    DataTablesModule
  ],
  declarations: [BasicComponent, DataComponent, ResponsiveComponent]
})
export class TablesModule { }
