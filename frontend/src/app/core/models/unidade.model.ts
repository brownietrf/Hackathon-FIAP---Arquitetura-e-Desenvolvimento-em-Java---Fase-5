export interface UnidadeSaudeResponse {
  id: number;
  nome: string;
  cnes: string;
  endereco?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  telefone?: string;
  email?: string;
  ativo?: boolean;
}

export interface UnidadeSaudeRequest {
  nome: string;
  cnes: string;
  endereco?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  telefone?: string;
  email?: string;
}
