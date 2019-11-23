import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { RouterModule, Routes } from '@angular/router';
import { ProgressComponent } from './progress/progress.component';

import { HelpersModule } from '../../helpers/helpers.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NavComponent } from './nav/nav.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TooltipComponent } from './tooltip/tooltip.component';

import { CollapseComponent } from './collapse/collapse.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalComponent } from './modal/modal.component';
import { ChartHelpersModule } from '../../helpers/chart-helpers/chart-helpers.module';

const routes: Routes = [
  { path: '', redirectTo: '/ui/buttons', pathMatch: 'full' },
  { path: 'buttons', component: ButtonsComponent, data: { title: 'Buttons' } },
  
  { path: 'progress', component: ProgressComponent, data: { title: 'Progress' } },
  { path: 'nav', component: NavComponent, data: { title: 'Navigation & Tabs' } },
  { path: 'dropdown', component: DropdownComponent, data: { title: 'Dropdown' } },
  
  { path: 'collapse', component: CollapseComponent, data: { title: 'Collapse' } },
  { path: 'tooltip', component: TooltipComponent, data: { title: 'Tooltip' } },
  
  { path: 'pagination', component: PaginationComponent, data: { title: 'Pagination' } },
  { path: 'carousel', component: CarouselComponent, data: { title: 'Carousel' } },
  { path: 'modal', component: ModalComponent, data: { title: 'Modal' } },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HelpersModule,
    ChartHelpersModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [ButtonsComponent, ProgressComponent,  DropdownComponent, NavComponent,  PaginationComponent, TooltipComponent, CollapseComponent, CarouselComponent, ModalComponent ]
})
export class ComponentsModule { }
