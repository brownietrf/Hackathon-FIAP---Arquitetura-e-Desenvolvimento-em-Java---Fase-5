export interface ProfissionalResponse {
  id: number;
  nome: string;
  crm?: string;
  especialidade?: string;
  unidadeId?: number;
}

export interface ProfissionalRequest {
  nome: string;
  crm?: string;
  especialidade?: string;
  unidadeId?: number;
}
