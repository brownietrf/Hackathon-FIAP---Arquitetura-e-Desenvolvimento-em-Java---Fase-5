import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnidadeSaudeRequest, UnidadeSaudeResponse } from '../models/unidade.model';

@Injectable({ providedIn: 'root' })
export class UnidadeService {
  private base = '/api/v1/unidades-saude';

  constructor(private http: HttpClient) {}

  list(): Observable<UnidadeSaudeResponse[]> {
    return this.http.get<UnidadeSaudeResponse[]>(this.base);
  }

  get(id: number): Observable<UnidadeSaudeResponse> {
    return this.http.get<UnidadeSaudeResponse>(`${this.base}/${id}`);
  }

  create(request: UnidadeSaudeRequest) {
    return this.http.post<UnidadeSaudeResponse>(this.base, request);
  }

  update(id: number, request: UnidadeSaudeRequest) {
    return this.http.put<UnidadeSaudeResponse>(`${this.base}/${id}`, request);
  }

  buscarPorNome(nome: string) {
    return this.http.get<UnidadeSaudeResponse[]>(`${this.base}/buscar?nome=${encodeURIComponent(nome)}`);
  }
}
