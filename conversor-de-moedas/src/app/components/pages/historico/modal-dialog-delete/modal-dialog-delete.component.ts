import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-dialog-delete',
  templateUrl: './modal-dialog-delete.component.html',
  styleUrls: ['./modal-dialog-delete.component.css']
})
export class ModalDialogDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalDialogDeleteComponent>) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  cancelarExclusao(): void {
    this.dialogRef.close();
  }
}
