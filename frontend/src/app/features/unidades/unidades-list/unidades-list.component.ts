import { Component, OnInit } from '@angular/core';
import { UnidadeService } from '../../../core/services/unidade.service';
import { UnidadeSaudeResponse } from '../../../core/models/unidade.model';

@Component({
  selector: 'app-unidades-list',
  templateUrl: './unidades-list.component.html',
  standalone: false
})
export class UnidadesListComponent implements OnInit {
  unidades: UnidadeSaudeResponse[] = [];

  constructor(private service: UnidadeService) {}

  ngOnInit(): void {
    this.service.list().subscribe(u => this.unidades = u);
  }
}