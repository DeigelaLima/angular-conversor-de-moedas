import { Component, ViewChild } from '@angular/core';
import { MoedasService } from 'src/app/services/moedas.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-tabela-moedas',
  templateUrl: './tabela-moedas.component.html',
  styleUrls: ['./tabela-moedas.component.css']
})

export class TabelaMoedasComponent {

  displayedColumns: string[] = ['code', 'description'];
  moedas: any[] = [];
  filteredMoedas: any[] = [];
  totalMoedas = 0;
  pageSize = 10;
  pageEvent: PageEvent | undefined;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private moedaService: MoedasService) { }

  ngOnInit(): void {
    this.moedaService.listarMoedas().subscribe(data => {
      this.moedas = data.supported_codes;
      this.filteredMoedas = this.moedas.slice(0, this.pageSize);
      this.totalMoedas = this.moedas.length;
    });
  }

  applyFilter(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const filterValue = inputElement.value.trim().toLowerCase();
    this.filteredMoedas = this.moedas.filter(moeda =>
      moeda[0].toLowerCase().includes(filterValue) ||
      moeda[1].toLowerCase().includes(filterValue)
    );
  }
}

