import { Component, OnInit } from "@angular/core";
import { PacienteService } from "../../../core/services/paciente.service";
import { PacienteResponse } from "../../../core/models/paciente.model";

@Component({
  selector: "app-pacientes-list",
  templateUrl: "./pacientes-list.component.html",
  standalone: false,
})
export class PacientesListComponent implements OnInit {
  pacientes: PacienteResponse[] = [];

  constructor(private service: PacienteService) {}

  ngOnInit(): void {
    this.service.list().subscribe((p) => (this.pacientes = p));
  }
}
