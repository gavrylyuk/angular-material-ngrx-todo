import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-window',
  templateUrl: './edit-window.component.html',
  styleUrls: ['./edit-window.component.css']
})
export class EditWindowComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<EditWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: object
  ) { }

  ngOnInit() {
  }

  handleClickCancel(): void {
    this.dialog.close();
  }
}
