import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './_components/auth/signin/signin.component';
import { SignupComponent } from './_components/auth/signup/signup.component';
import { ForgotComponent } from './_components/auth/forgot/forgot.component';
import { DetailProjectComponent } from './pages/detail-project/detail-project.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';

const routes: Routes = [
  { path : '' , component : HomeComponent , pathMatch : 'full' },
  { path : 'signin' , component :  SigninComponent, pathMatch : 'full' },
  { path : 'detail' , component : DetailProjectComponent, pathMatch : 'full' },
  { path : 'create' , component : CreateProjectComponent, pathMatch : 'full' },
  { path : 'signup' , component :  SignupComponent, pathMatch : 'full' },
  { path : 'forgot' , component : ForgotComponent, pathMatch : 'full' },


  { path : '**' , component :  HomeComponent, pathMatch : 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
