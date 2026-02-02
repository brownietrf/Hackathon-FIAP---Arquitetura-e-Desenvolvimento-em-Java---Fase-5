import { Component, OnInit } from '@angular/core';
import { HorarioService } from '../../../core/services/horario.service';
import { HorarioDisponivelResponse } from '../../../core/models/horario.model';

@Component({
  selector: 'app-horarios-list',
  templateUrl: './horarios-list.component.html',
  standalone: false
})
export class HorariosListComponent implements OnInit {
  horarios: HorarioDisponivelResponse[] = [];

  constructor(private service: HorarioService) {}

  ngOnInit(): void {
    // example
  }
}