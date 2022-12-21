import {Component} from '@angular/core';
import {Firestore} from '@angular/fire/firestore';
import {MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-create-new-admin-note',
  templateUrl: './create-new-admin-note.component.html',
  styleUrls: ['./create-new-admin-note.component.scss']
})
export class CreateNewAdminNoteComponent {

  constructor(
    private firebase: Firestore,
    private dialogRef: MatDialogRef<CreateNewAdminNoteComponent>,
  ) {
  }

  sue!: string
  close() {
    this.dialogRef.close(true);
  }

  save() {

  }
}
