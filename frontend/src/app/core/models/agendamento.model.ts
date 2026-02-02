export interface AgendamentoRequest {
  pacienteId: number;
  profissionalId: number;
  unidadeId: number;
  data: string; // YYYY-MM-DD
  horarioId: number;
  tipo?: string;
}

export interface AgendamentoResponse {
  id: number;
  pacienteId: number;
  profissionalId: number;
  unidadeId: number;
  data: string;
  horario: string;
  status: string;
}

export interface VagaDisponivelResponse {
  profissionalId: number;
  unidadeId: number;
  data: string;
  horarios: { id: number; hora: string }[];
}
