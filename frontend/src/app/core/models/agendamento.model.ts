export interface AgendamentoRequest {
  pacienteId: number;
  profissionalId: number;
  dataAgendamento: string; // YYYY-MM-DD
  horaAgendamento: string; // HH:mm
  tipoAtendimento?: string;
  observacoes?: string;
}

export interface AgendamentoResponse {
  id: number;
  pacienteId: number;
  profissionalId: number;
  dataAgendamento: string;
  horaAgendamento: string;
  tipoAtendimento?: string;
  status: string;
  observacoes?: string;
  paciente?: { id: number; nome: string };
  profissional?: { id: number; nome: string };
}

export interface VagaDisponivelResponse {
  profissionalId: number;
  profissionalNome: string;
  especialidade: string;
  unidadeId: number;
  unidadeNome: string;
  data: string;
  horarios: string[];
}
