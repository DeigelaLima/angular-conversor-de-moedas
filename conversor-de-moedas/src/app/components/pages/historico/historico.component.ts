// import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { IHistorico } from 'src/app/interface/IHistorico';
// import { ModalDialogDeleteComponent } from './modal-dialog-delete/modal-dialog-delete.component';

// @Component({
//   selector: 'app-historico',
//   templateUrl: './historico.component.html',
//   styleUrls: ['./historico.component.css']
// })
// export class HistoricoComponent implements OnInit, AfterViewInit {

//   local: any = localStorage.getItem('historico');

//   constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

//   displayedColumns: string[] = [
//     'date',
//     'time',
//     'inputValue',
//     'inputCurrency',
//     'outputValue',
//     'outputCurrency',
//     'rate',
//     'delete',
//   ];

//   dataSource = new MatTableDataSource<IHistorico>();
//   @ViewChild(MatSort) sort!: MatSort;

//   ngOnInit(): void {
//     this.dataSource.data = JSON.parse(this.local) || [];
//   }

//   ngAfterViewInit() {
//     this.dataSource.sort = this.sort;
//   }

//   deletarHistorico(index: number): void {

//     const dialogRef = this.dialog.open(ModalDialogDeleteComponent);

//     dialogRef.afterClosed().subscribe((result: IHistorico) => {
//       if (result) {
//         this.dataSource.data.splice(index, 1)
//         localStorage.setItem('historico', JSON.stringify(this.dataSource.data)
//         );
//         this.dataSource.data = JSON.parse(this.local) || [];
//         this.openSnackBar();
//         /*
//         setTimeout(() => {
//           window.location.reload();
//       }, 2000);
//         */
//       }
//     });
//   }

//   openSnackBar(): void {
//     this._snackBar.openFromComponent(SnackBarComponent, {
//       horizontalPosition: 'right',
//       verticalPosition: 'top',
//       duration: 2500,
//     });
//   }

// }
