import { ApplyComponent } from './apply.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyRoutingModule } from './apply-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ApplyComponent
  ],
  imports: [
    CommonModule,
    ApplyRoutingModule,
    FormsModule
   
  ],
})
export class ApplyModule { }