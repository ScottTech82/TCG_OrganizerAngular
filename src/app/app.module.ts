import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './misc/menu/menu.component';
import { MenuitemComponent } from './misc/menuitem/menuitem.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
