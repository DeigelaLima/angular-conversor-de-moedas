/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { AfterViewInit, Component, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
import { IMoedas } from '../../../../interface/IMoeda';
import { MoedasService } from 'src/app/services/moedas.service';

@Component({
  selector: 'app-tabela-moedas',
  templateUrl: './tabela-moedas.component.html',
  styleUrls: ['./tabela-moedas.component.css']
})

export class TabelaMoedasComponent {
  error: any;
  moedas: IMoedas[] = [];

  constructor(private moedasService: MoedasService) {
    this.moedasService.listarMoedas().subscribe(
      (resposta) => {
        this.moedas = resposta.supported_codes.map(
          (moedaInfo:any) => {
            return {code: moedaInfo[0], description: moedaInfo[1]}
          })
      }
    );
  }

  ngOnInit(): void {
    (error: any) => {
      this.error = error;
      console.error('ERROR: ', error);
    };
  }
}

