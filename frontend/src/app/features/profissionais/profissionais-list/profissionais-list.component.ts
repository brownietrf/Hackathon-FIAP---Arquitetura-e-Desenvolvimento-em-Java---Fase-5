import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from '../../../core/services/profissional.service';
import { ProfissionalResponse } from '../../../core/models/profissional.model';

@Component({
  selector: 'app-profissionais-list',
  templateUrl: './profissionais-list.component.html',
  standalone: false
})
export class ProfissionaisListComponent implements OnInit {
  profissionais: ProfissionalResponse[] = [];

  constructor(private service: ProfissionalService) {}

  ngOnInit(): void {
    this.service.list().subscribe(p => this.profissionais = p);
  }
}