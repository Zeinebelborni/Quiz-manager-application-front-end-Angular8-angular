import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { HelpersModule } from '../../helpers/helpers.module'
import { ContactusComponent } from './contactus/contactus.component';;
const routes: Routes = [
  { path: 'profile', component: ProfileComponent, data: { title: 'Profile' } },
  { path: 'contactus', component: ContactusComponent, data: { title: 'Contactus Component' } }
];
@NgModule({
  imports: [
    CommonModule,
    HelpersModule,
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule
  ],
  declarations: [ProfileComponent, ContactusComponent]
})
export class UserModule { }
