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
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './_interceptor/token.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CardsComponent } from './_components/cards/cards.component';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { DetailProjectComponent } from './pages/detail-project/detail-project.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
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
    CardsComponent,
    DetailProjectComponent,
    CreateProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatRippleModule,
    MatButtonModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS , useClass : TokenInterceptor , multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
