export interface HorarioDisponivelRequest {
  profissionalId: number;
  unidadeId: number;
  data: string; // YYYY-MM-DD
  hora: string; // HH:mm
}

export interface HorarioDisponivelResponse {
  id: number;
  profissionalId: number;
  unidadeId: number;
  data: string;
  hora: string;
  disponivel: boolean;
}
