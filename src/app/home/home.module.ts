import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminNotesComponent } from './home-page/admin-notes/admin-notes.component';
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    HomePageComponent,
    AdminNotesComponent
  ],
  imports: [
    CommonModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatButtonModule,

  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
