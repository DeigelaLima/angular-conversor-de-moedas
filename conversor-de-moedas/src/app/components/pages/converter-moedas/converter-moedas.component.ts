import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IHistorico } from 'src/app/interface/IHistorico';
import { IMoeda } from 'src/app/interface/IMoeda';
import { ISimbolo } from 'src/app/interface/ISimbolo';
import { MoedasService } from 'src/app/services/moedas.service';

@Component({
  selector: 'app-converter-moedas',
  templateUrl: './converter-moedas.component.html',
  styleUrls: ['./converter-moedas.component.css']
})
export class ConverterMoedasComponent implements OnInit {

  moedasDisponiveis!: IMoeda[];
  form!: FormGroup;
  moedaOrigem!: string;
  moedaDestino!: string;
  valor!: number;
  taxa!: any;
  resultado: any;

  conversions: IHistorico[] = [];
  date!: string;
  time!: string;
  maiorValorEmDolar!: number;

  local: any = localStorage.getItem('historico');

  constructor(private moedaService: MoedasService) {
    this.form = new FormGroup({
      moedaOrigem: new FormControl(''),
      moedaDestino: new FormControl(''),
      valor: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.moedaService.listarMoedas().subscribe(data => {
      this.moedasDisponiveis = data.supported_codes.map((moeda: any) => {
        return {code: moeda[0], description: moeda[1]}
      });
    });
  }

  converterMoeda(): void {
    if (this.valor >= 0) {
      this.moedaService
        .razaoConversao(this.moedaOrigem, this.moedaDestino)
        .subscribe((data: any) => {
          this.taxa = data.conversion_rate;
          this.resultado = this.valor * this.taxa;
          this.salvarLocalStorage();
        });
    }
  }

  salvarLocalStorage(): void {
    let date = new Date();

    this.date = date.toLocaleDateString();
    this.time = date.toLocaleTimeString();

    let conversion: IHistorico = {
      date: this.date,
      time: this.time,
      inputValue: this.valor,
      inputCurrency: this.moedaOrigem,
      outputValue: this.resultado,
      outputCurrency: this.moedaDestino,
      rate: this.taxa,
      valorConvertido: this.maiorValorEmDolar,
    };

    this.conversions = JSON.parse(this.local) || [];
    this.conversions.push(conversion);
    localStorage.setItem('historico', JSON.stringify(this.conversions));
  }
}
