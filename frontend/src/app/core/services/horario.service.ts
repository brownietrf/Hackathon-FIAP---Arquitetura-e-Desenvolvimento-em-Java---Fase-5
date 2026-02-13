import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HorarioDisponivelRequest, HorarioDisponivelResponse } from '../models/horario.model';

@Injectable({ providedIn: 'root' })
export class HorarioService {
  private base = '/api/v1/horarios-disponiveis';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<HorarioDisponivelResponse[]>(this.base);
  }

  create(request: HorarioDisponivelRequest) {
    return this.http.post<HorarioDisponivelResponse>(this.base, request);
  }

  listByProfissional(profissionalId: number) {
    return this.http.get<HorarioDisponivelResponse[]>(`${this.base}/profissional/${profissionalId}`);
  }

  get(id: number) { return this.http.get<HorarioDisponivelResponse>(`${this.base}/${id}`); }

  desativar(id: number) {
    return this.http.patch<HorarioDisponivelResponse>(`${this.base}/${id}/desativar`, {});
  }

  ativar(id: number) {
    return this.http.patch<HorarioDisponivelResponse>(`${this.base}/${id}/ativar`, {});
  }
}
