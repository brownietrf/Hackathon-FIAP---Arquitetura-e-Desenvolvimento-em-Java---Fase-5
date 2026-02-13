import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ListaEsperaResponse } from "../../../core/models/listaespera.model";
import { ListaEsperaService } from "../../../core/services/listaespera.service";

@Component({
  selector: "app-listaespera-list",
  templateUrl: "./listaespera-list.component.html",
  styleUrl: "./listaespera-list.component.css",
  imports: [CommonModule, MatListModule, RouterLink, FormsModule],
})
export class ListaesperaListComponent implements OnInit {
  lista: ListaEsperaResponse[] = [];
  listaFiltrada: ListaEsperaResponse[] = [];

  // Filtros
  filtroId: string = '';
  filtroEspecialidade: string = '';
  filtroPacienteId: string = '';

  especialidades = [
    'CARDIOLOGIA',
    'DERMATOLOGIA',
    'GINECOLOGIA',
    'PEDIATRIA',
    'ORTOPEDIA',
    'OFTALMOLOGIA',
    'NEUROLOGIA',
    'PSIQUIATRIA',
    'CLINICA_GERAL',
    'OUTRAS'
  ];

  constructor(
    private service: ListaEsperaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarLista();
  }

  carregarLista(): void {
    this.service.list().subscribe(data => {
      this.lista = data;
      this.aplicarFiltros();
      this.cdr.detectChanges(); // Força detecção de mudanças
    });
  }

  aplicarFiltros(): void {
    this.listaFiltrada = this.lista.filter(item => {
      const matchId = !this.filtroId || item.id.toString().includes(this.filtroId);
      const matchEspecialidade = !this.filtroEspecialidade || item.especialidade === this.filtroEspecialidade;
      const matchPacienteId = !this.filtroPacienteId || item.pacienteId.toString().includes(this.filtroPacienteId);

      return matchId && matchEspecialidade && matchPacienteId;
    });
  }

  limparFiltros(): void {
    this.filtroId = '';
    this.filtroEspecialidade = '';
    this.filtroPacienteId = '';
    this.aplicarFiltros();
  }

  remover(id: number): void {
    if (confirm('Tem certeza que deseja remover este paciente da lista de espera?')) {
      this.service.remover(id).subscribe(() => {
        this.carregarLista();
        this.cdr.detectChanges(); // Força detecção de mudanças
      });
    }
  }

  marcarAtendido(id: number): void {
    this.service.marcarComoAtendido(id).subscribe(() => {
      this.carregarLista();
      this.cdr.detectChanges(); // Força detecção de mudanças
    });
  }
}
