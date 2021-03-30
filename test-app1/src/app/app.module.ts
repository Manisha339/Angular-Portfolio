import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsModule } from './user-details/user-details.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
