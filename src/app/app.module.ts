import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibModule } from './lib';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdInputModule, } from '@angular/material';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminHerderComponent } from './com/admin-herder/admin-herder.component';
import { AdminSideberComponent } from './com/admin-sideber/admin-sideber.component';
import { HashComponent } from './com/hash/hash.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    AdminHerderComponent,
    AdminSideberComponent,
    HashComponent
  ],
  imports: [
    LibModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: LoginPageComponent, pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
    ]),
    BrowserAnimationsModule,
    MdInputModule,
    FormsModule,
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
