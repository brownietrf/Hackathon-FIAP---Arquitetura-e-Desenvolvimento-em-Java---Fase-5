import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { RouterLink } from "@angular/router";
import { UnidadeSaudeResponse } from "../../../core/models/unidade.model";
import { UnidadeService } from "../../../core/services/unidade.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-unidades-list",
  templateUrl: "./unidades-list.component.html",
  styleUrl: "./unidades-list.component.css",
  imports: [CommonModule, MatCardModule, RouterLink],
})
export class UnidadesListComponent {
  unidades: UnidadeSaudeResponse[] = [];

  constructor(
    private service: UnidadeService,
    private cdr: ChangeDetectorRef
  ) {
    this.carregarLista();
  }

  carregarLista(): void {
    this.service.list().subscribe(data => {
      this.unidades = data;
      this.cdr.detectChanges();
    });
  }

  desativar(id: number): void {
    if (confirm('Tem certeza que deseja desativar esta unidade?')) {
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
