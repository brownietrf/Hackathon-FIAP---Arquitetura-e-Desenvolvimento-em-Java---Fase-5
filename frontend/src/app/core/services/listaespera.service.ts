import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListaEsperaRequest, ListaEsperaResponse } from '../models/listaespera.model';

@Injectable({ providedIn: 'root' })
export class ListaEsperaService {
  private base = '/api/v1/lista-espera';

  constructor(private http: HttpClient) {}

  add(request: ListaEsperaRequest) {
    return this.http.post<ListaEsperaResponse>(this.base, request);
  }

  listByEspecialidade(especialidade: string) {
    return this.http.get<ListaEsperaResponse[]>(`${this.base}/especialidade/${encodeURIComponent(especialidade)}`);
  }
}
