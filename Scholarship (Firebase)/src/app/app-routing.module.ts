import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterModule } from './register/register.module';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./homepage/homepage.module').then(mod => mod.HomepageModule),
  },
  {
    path: "layout",
    loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule),
  },
  {
    path: "login",
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
  },
  {
    path: "register",
    loadChildren: () => import('./register/register.module').then(mod => mod.RegisterModule),
  },
  {
    path: "scholarships",
    loadChildren: () => import('./scholarships/scholarships.module').then(mod => mod.ScholarshipsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
