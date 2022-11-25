import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { E404Component } from './misc/e404/e404.component';

const routes: Routes = [
{path: "", redirectTo: "/user/login", pathMatch: "full"},

{path: "user/login", component: UserLoginComponent},
{path: "user/list", component: UserListComponent},
{path: "user/detail/:id", component: UserDetailComponent},
{path: "user/new", component: UserNewComponent},





{path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
