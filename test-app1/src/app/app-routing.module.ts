import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './user-details/sign-in/sign-in.component';
import { SignUpComponent } from './user-details/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: "SIGN-UP", component: SignUpComponent
  },

  {
    path: "SIGN-IN", component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
