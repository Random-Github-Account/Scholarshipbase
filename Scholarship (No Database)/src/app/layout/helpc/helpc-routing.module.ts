import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelpcComponent } from './helpc.component';


const routes : Routes = [
  {
    path: '',
    component: HelpcComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpcRoutingModule { }
