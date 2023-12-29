import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes : Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: "",
        redirectTo: "dashboard", pathMatch:"prefix",
      },
      {
        path: "dashboard",
        loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
      },
      {
        path: "applications",
        loadChildren: () => import('./applications/applications.module').then(mod => mod.ApplicationsModule),
      },
      {
        path: "help",
        loadChildren: () => import('./helpc/helpc.module').then(mod => mod.HelpcModule),
      },
      {
        path: "notifications",
        loadChildren: () => import('./notifications/notifications.module').then(mod => mod.NotificationsModule),
      },
      {
        path: "messages",
        loadChildren: () => import('./messages/messages.module').then(mod => mod.MessagesModule),
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
