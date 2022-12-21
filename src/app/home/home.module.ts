import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import {AdminNotesComponent} from './home-page/admin-notes/admin-notes.component';
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {CreateNewAdminNoteComponent} from './create-new-admin-note/create-new-admin-note.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    HomePageComponent,
    AdminNotesComponent,
    CreateNewAdminNoteComponent
  ],
  imports: [
    CommonModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    HomePageComponent
  ],
})
export class HomeModule { }
