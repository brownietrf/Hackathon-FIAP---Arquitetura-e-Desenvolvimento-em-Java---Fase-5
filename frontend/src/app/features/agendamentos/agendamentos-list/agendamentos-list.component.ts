import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from '../../../core/services/agendamento.service';
import { AgendamentoResponse } from '../../../core/models/agendamento.model';

@Component({
  selector: 'app-agendamentos-list',
  templateUrl: './agendamentos-list.component.html',
  standalone: false
})
export class AgendamentosListComponent implements OnInit {
  agendamentos: AgendamentoResponse[] = [];
  displayedColumns = ['id', 'paciente'];

  constructor(private service: AgendamentoService) {}

  ngOnInit(): void {
    this.service.listByPaciente(1).subscribe(a => this.agendamentos = a);
  }
}