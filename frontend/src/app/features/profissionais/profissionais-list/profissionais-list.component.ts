import { CommonModule } from "@angular/common";
import { Component, ChangeDetectorRef } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { RouterLink } from "@angular/router";
import { ProfissionalResponse } from "../../../core/models/profissional.model";
import { ProfissionalService } from "../../../core/services/profissional.service";

@Component({
  selector: "app-profissionais-list",
  templateUrl: "./profissionais-list.component.html",
  styleUrl: "./profissionais-list.component.css",
  imports: [CommonModule, MatListModule, RouterLink],
})
export class ProfissionaisListComponent {
  profissionais: ProfissionalResponse[] = [];

  constructor(
    private service: ProfissionalService,
    private cdr: ChangeDetectorRef
  ) {
    this.carregarLista();
  }

  carregarLista(): void {
    this.service.list().subscribe(data => {
      this.profissionais = data;
      this.cdr.detectChanges();
    });
  }

  desativar(id: number): void {
    if (confirm('Tem certeza que deseja desativar este profissional?')) {
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
