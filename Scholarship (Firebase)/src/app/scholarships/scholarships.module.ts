import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScholarshipsComponent } from './scholarships.component';
import { ScholarshipsRoutingModule } from './scholarships-routing.module';



@NgModule({
  declarations: [
    ScholarshipsComponent
  ],
  imports: [
    CommonModule,
    ScholarshipsRoutingModule
  ]
})
export class ScholarshipsModule { }
