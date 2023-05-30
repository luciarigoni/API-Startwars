import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  eyeColor: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { eye_color: string}, public dialogRef: MatDialogRef<PopUpComponent>
  ) {
    this.eyeColor = data.eye_color;
  }

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close();
  }
}