/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IMoedas } from 'src/app/interface/IMoeda';
import { ISimbolo } from 'src/app/interface/ISimbolo';
import { MoedasService } from 'src/app/services/moedas.service';

@Component({
  selector: 'app-tabela-moedas',
  templateUrl: './tabela-moedas.component.html',
  styleUrls: ['./tabela-moedas.component.css']
})
export class TabelaMoedasComponent  implements AfterViewInit {
  error: any;
  displayedColumns: string[] = ['code', 'description'];
  dataSource: MatTableDataSource<IMoedas>;
  listaDeMoedas: IMoedas[] = [];

  // controlar a paginação de dados em uma tabela
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // controlar a ordenação de dados na tabela
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public moedas: MoedasService) {
    this.dataSource = new MatTableDataSource(this.listaDeMoedas);
  }

  // chamado após o Angular inicializar o componente
  ngOnInit(): void {
    // obter os símbolos de moedas
    this.getSimbolos();
    (error: any) => {
      this.error = error;
      console.error('ERROR: ', error);
    };
  }
  // chamado após a inicialização da visualização do componente
  ngAfterViewInit(): void {
    // ordenar tabela
    this.dataSource.sort = this.sort;
  }

  // chamada ao serviço moedas para obter os símbolos de moeda
  getSimbolos(): void {
    this.moedas.getSymbols().subscribe((data: ISimbolo) => {
      // os símbolos são mapeados para uma lista de objetos IMoedas
      var retorno = Object.keys(data.symbols).map(function (moeda: any) {
        let resultado = data.symbols[moeda];
        return resultado;
      });
      this.listaDeMoedas = retorno;
      this.dataSource = new MatTableDataSource(this.listaDeMoedas);
      // permitir a paginação e a ordenação
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  // chamado quando o usuário digita algo no campo de filtro da tabela
  applyFilter(event: Event): void {
    // obtém o valor do filtro do evento
    const filterValue = (event.target as HTMLInputElement).value;
    // converte para minúsculas
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // se houver um paginador associado ao dataSource
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage(); // retorna à primeira página da paginação.
    }
  }
}







//Esses métodos garantem que a tabela de moedas seja preenchida
// com os dados corretos, permitindo a ordenação, paginação e filtragem.

