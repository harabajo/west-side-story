import {Component, OnInit} from '@angular/core';
import {collection, Firestore, addDoc} from '@angular/fire/firestore';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-create-new-admin-note',
  templateUrl: './create-new-admin-note.component.html',
  styleUrls: ['./create-new-admin-note.component.scss']
})
export class CreateNewAdminNoteComponent implements OnInit{

  constructor(
    private firestore: Firestore,
    private dialogRef: MatDialogRef<CreateNewAdminNoteComponent>,
  ) {
  }

  colRef = collection(this.firestore,'adminNote')
  fg = new FormGroup({
    title: new FormControl(null,[Validators.required]),
    message: new FormControl(null,[Validators.required]),

  })

  ngOnInit() {
  }

  close() {
    this.dialogRef.close(false);
  }

  async save() {
    await addDoc(this.colRef,this.fg.value);
    this.dialogRef.close(true);
  }
}
