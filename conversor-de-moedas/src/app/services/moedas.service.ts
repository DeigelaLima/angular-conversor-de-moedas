import { environment } from '../../environments/environment';
import { ISimbolo } from '../interface/ISimbolo';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class MoedasService {
  api_url: string = "https://v6.exchangerate-api.com/v6/c5c11ecde06df91db4ca8a61/"


  constructor(private http: HttpClient) {}

  // getSymbols(): Observable<ISimbolo> {
  //   return this.http.get<ISimbolo>(`${environment.API_URL}/symbols`);
  // }

  razaoConversao(moedaOrigem: string, moedaDestino: string) {
    const endpoint: string = `${this.api_url}/pair/${moedaOrigem}/${moedaDestino}`;
    return this.http.get<any>(endpoint);
  }

  listarMoedas(): Observable<any> {
    const endpoint = this.api_url + "/codes"
    return this.http.get<any>(endpoint);
  }
}
