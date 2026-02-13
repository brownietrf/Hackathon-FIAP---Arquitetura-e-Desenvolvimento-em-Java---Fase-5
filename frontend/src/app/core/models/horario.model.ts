export interface HorarioDisponivelRequest {
  profissionalId: number;
  diaSemana: string; // MONDAY, TUESDAY, etc
  horaInicio: string; // HH:mm
  horaFim: string; // HH:mm
  duracaoConsultaMinutos: number;
  vagasPorHorario: number;
}

export interface HorarioDisponivelResponse {
  id: number;
  profissionalId: number;
  profissionalNome?: string;
  diaSemana: string;
  horaInicio: string;
  horaFim: string;
  duracaoConsultaMinutos: number;
  vagasPorHorario: number;
  ativo?: boolean;
}
