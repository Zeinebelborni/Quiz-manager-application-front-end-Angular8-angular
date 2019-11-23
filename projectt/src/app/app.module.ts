import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HelpersModule } from './helpers/helpers.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { SettingsComponent } from './settings/settings.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AppHammerConfig } from './app-hammer-config';
import{HttpClient} from '@angular/common/http'

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SidebarComponent,
    TopbarComponent,
    LayoutComponent,
    SettingsComponent,
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HelpersModule,
    FormsModule,
    SlimLoadingBarModule.forRoot() ,
    HttpClientModule ,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    

    
   
    
   
   
  ],
  providers:
  [DataService ,
    
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: AppHammerConfig
    } ,
    
  ],
  
  bootstrap: [AppComponent]

})
export class AppModule { }
