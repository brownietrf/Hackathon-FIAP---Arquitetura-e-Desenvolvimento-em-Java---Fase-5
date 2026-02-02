export interface UnidadeSaudeResponse {
  id: number;
  nome: string;
  cnes: string;
  endereco?: string;
  cidade?: string;
}

export interface UnidadeSaudeRequest {
  nome: string;
  cnes: string;
  endereco?: string;
  cidade?: string;
}
