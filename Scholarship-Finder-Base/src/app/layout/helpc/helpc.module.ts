import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpcComponent } from './helpc.component';
import { HelpcRoutingModule } from './helpc-routing.module';


@NgModule({
  declarations: [
    HelpcComponent
  ],
  imports: [
    CommonModule,
    HelpcRoutingModule
  ]
})
export class HelpcModule { }
