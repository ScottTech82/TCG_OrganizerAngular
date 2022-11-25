import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './misc/menu/menu.component';
import { MenuitemComponent } from './misc/menuitem/menuitem.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HeadComponent } from './common/head/head.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { E404Component } from './misc/e404/e404.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuitemComponent,
    UserListComponent,
    HeadComponent,
    UserNewComponent,
    UserDetailComponent,
    UserLoginComponent,
    E404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
