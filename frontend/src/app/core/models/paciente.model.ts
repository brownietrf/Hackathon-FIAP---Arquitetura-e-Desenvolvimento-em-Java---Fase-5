export interface PacienteResponse {
  id: number;
  nome: string;
  cpf: string;
  cartaoSus: string;
  telefone?: string;
  email?: string;
  ativo?: boolean;
}

export interface PacienteRequest {
  nome: string;
  cpf: string;
  cartaoSus: string;
  telefone?: string;
  email?: string;
}
