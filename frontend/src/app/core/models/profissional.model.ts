export interface ProfissionalResponse {
  id: number;
  nome: string;
  cpf?: string;
  registroProfissional?: string;
  especialidade?: string;
  telefone?: string;
  email?: string;
  unidadeSaudeId?: number;
  ativo?: boolean;
}

export interface ProfissionalRequest {
  nome: string;
  cpf?: string;
  registroProfissional?: string;
  especialidade?: string;
  telefone?: string;
  email?: string;
  unidadeSaudeId?: number;
}
