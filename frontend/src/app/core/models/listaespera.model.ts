export interface ListaEsperaRequest {
  pacienteId: number;
  especialidade: string;
  unidadeId?: number;
}

export interface ListaEsperaResponse {
  id: number;
  pacienteId: number;
  especialidade: string;
  posicao: number;
}
