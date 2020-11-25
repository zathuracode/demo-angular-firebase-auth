import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

import { AngularFireAuthGuard,redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';

const redirectUnauthorizedToLogin=()=>redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,
              canActivate:[AngularFireAuthGuard],
              data:{authGuardPipe:redirectUnauthorizedToLogin}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
