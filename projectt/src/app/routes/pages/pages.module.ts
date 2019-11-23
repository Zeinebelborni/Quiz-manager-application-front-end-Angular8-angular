import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelpersModule } from '../../helpers/helpers.module';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';
const routes: Routes = [
  { path: 'search', component: SearchComponent, data: { title: 'Search Results' } },
  { path: 'account', component: AccountComponent, data: { title: 'Account Settings' } },
];
@NgModule({
  imports: [
    CommonModule,
    HelpersModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchComponent, AccountComponent]
})
export class PagesModule { }
