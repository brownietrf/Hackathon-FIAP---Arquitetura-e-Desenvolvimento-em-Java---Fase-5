export interface PacienteResponse {
  id: number;
  nome: string;
  cpf: string;
  cartaoSus: string;
  dataNascimento?: string;
  telefone?: string;
  email?: string;
  endereco?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  prioridade?: number;
  ativo?: boolean;
}

export interface PacienteRequest {
  nome: string;
  cpf: string;
  cartaoSus: string;
  dataNascimento?: string;
  telefone?: string;
  email?: string;
  endereco?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  prioridade?: number;
}
