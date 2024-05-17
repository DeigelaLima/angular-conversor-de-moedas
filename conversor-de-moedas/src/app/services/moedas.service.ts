import { environment } from '../../environments/environment';
import { ISimbolo } from '../interface/ISimbolo';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class MoedasService {
  api_url: string = "https://v6.exchangerate-api.com/v6/84bb2a9d9130eac27aba99bb/"


  constructor(private http: HttpClient) {}

  // getSymbols(): Observable<ISimbolo> {
  //   return this.http.get<ISimbolo>(`${environment.API_URL}/symbols`);
  // }

  converterMoeda(moedaOrigem: string, moedaDestino: string, valor: number) {
    const url: string = `${this.api_url}/convert?from=${moedaOrigem}&to=${moedaDestino}&amount=${valor}`;
    return this.http.get(url);
  }

  listarMoedas(): Observable<any> {
    const endpoint = this.api_url + "/codes"
    return this.http.get<any>(endpoint);
  }
}
