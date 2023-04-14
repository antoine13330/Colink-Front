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
import { ProfilManagementComponent } from './_components/profil-management/profil-management.component';
import { ProfilPageComponent } from './pages/profil-page/profil-page.component';
import { ProfilListProjectComponent } from './_components/profil-list-project/profil-list-project.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { CardsComponent } from './_components/cards/cards.component';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import { OthersProfilPageComponent } from './pages/others-profil-page/others-profil-page.component';
import { OthersProfilComponent } from './_components/others-profil/others-profil.component';
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
    ProfilManagementComponent,
    ProfilPageComponent,
    ProfilListProjectComponent,
    ProfilManagementComponent,
    ProfilPageComponent,
    ProfilListProjectComponent,
    OthersProfilPageComponent,
    OthersProfilComponent,
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
    MatButtonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS , useClass : TokenInterceptor , multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
