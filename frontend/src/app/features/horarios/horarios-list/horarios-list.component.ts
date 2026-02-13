import { CommonModule } from "@angular/common";
import { Component, ChangeDetectorRef } from "@angular/core";
import { RouterLink } from "@angular/router";

import { HorarioDisponivelResponse } from "../../../core/models/horario.model";
import { HorarioService } from "../../../core/services/horario.service";

import { MatListModule } from "@angular/material/list";

@Component({
  selector: "app-horarios-list",
  standalone: true,
  templateUrl: "./horarios-list.component.html",
  styleUrl: "./horarios-list.component.css",
  imports: [CommonModule, MatListModule, RouterLink],
})
export class HorariosListComponent {
  horarios: HorarioDisponivelResponse[] = [];

  constructor(
    private service: HorarioService,
    private cdr: ChangeDetectorRef
  ) {
    this.carregarLista();
  }

  carregarLista(): void {
    this.service.list().subscribe((data: HorarioDisponivelResponse[]) => {
      this.horarios = data;
      this.cdr.detectChanges();
    });
  }

  desativar(id: number): void {
    if (confirm('Tem certeza que deseja desativar este horário?')) {
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
