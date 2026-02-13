import { CommonModule } from "@angular/common";
import { Component, ChangeDetectorRef } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PacienteResponse } from "../../../core/models/paciente.model";
import { PacienteService } from "../../../core/services/paciente.service";

@Component({
  selector: "app-pacientes-list",
  templateUrl: "./pacientes-list.component.html",
  styleUrl: "./pacientes-list.component.css",
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class PacientesListComponent {
  pacientes: PacienteResponse[] = [];

  constructor(
    private service: PacienteService,
    private cdr: ChangeDetectorRef
  ) {
    this.carregarLista();
  }

  carregarLista(): void {
    this.service.list().subscribe(data => {
      this.pacientes = data;
      this.cdr.detectChanges();
    });
  }

  desativar(id: number): void {
    if (confirm('Tem certeza que deseja desativar este paciente?')) {
      this.service.desativar(id).subscribe(() => {
        this.carregarLista();
      });
    }
  }

  ativar(id: number): void {
    this.service.ativar(id).subscribe(() => {
      this.carregarLista();
    });
  }
}
