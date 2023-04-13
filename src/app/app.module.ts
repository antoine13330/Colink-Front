import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/layout/standard-layout/navbar/navbar.component';
import { StandardLayoutComponent } from './_components/layout/standard-layout/standard-layout.component';
import { AuthLayoutComponent } from './_components/layout/auth-layout/auth-layout.component';
import { FooterComponent } from './_components/layout/standard-layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './_components/auth/signin/signin.component';
import { SignupComponent } from './_components/auth/signup/signup.component';
import { ForgotComponent } from './_components/auth/forgot/forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    StandardLayoutComponent,
    AuthLayoutComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ForgotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
