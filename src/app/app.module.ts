import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header-img/header.component';
import { HeadermenuprincipalComponent } from './component/header/headermenuprincipal/headermenuprincipal.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import { ListUserViewComponent } from './component/list-user-view/list-user-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HeadermenuprincipalComponent,
    ListUserComponent,
    ListUserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
