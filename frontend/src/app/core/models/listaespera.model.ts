export interface ListaEsperaRequest {
  pacienteId: number;
  especialidade: string;
  unidadeSaudePreferidaId?: number;
  observacoes?: string;
}

export interface ListaEsperaResponse {
  id: number;
  pacienteId: number;
  pacienteNome?: string;
  pacienteCartaoSus?: string;
  especialidade: string;
  especialidadeDescricao?: string;
  unidadeSaudePreferidaId?: number;
  unidadeSaudePreferidaNome?: string;
  prioridade?: number;
  prioridadeDescricao?: string;
  dataSolicitacao?: string;
  dataAgendamento?: string;
  atendido?: boolean;
  observacoes?: string;
  posicaoNaFila?: number;
  totalNaFila?: number;
}
