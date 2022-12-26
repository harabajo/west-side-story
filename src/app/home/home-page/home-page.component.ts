import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog"
import {CreateNewAdminNoteComponent} from "../create-new-admin-note/create-new-admin-note.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private dialog: MatDialog) {
  }

  openCreatNewAdminNote(): void {
    const dialogRef = this.dialog.open(CreateNewAdminNoteComponent, {
      height: '600px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(val => {
      console.log(val)
    })
  }
}
