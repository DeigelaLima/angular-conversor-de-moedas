import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IHistorico } from 'src/app/interface/IHistorico';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

    form!: FormGroup;
    constructor() {
        this.form = new FormGroup({
          moedaOrigem: new FormControl(''),
          moedaDestino: new FormControl(''),
          valor: new FormControl(''),
        });
      }

  ngOnInit(): void {
    this.form = new FormGroup({
        moedaOrigem: new FormControl(''),
        moedaDestino: new FormControl(''),
        valor: new FormControl(''),
      });
  }

  ngAfterViewInit() {
  }
}





