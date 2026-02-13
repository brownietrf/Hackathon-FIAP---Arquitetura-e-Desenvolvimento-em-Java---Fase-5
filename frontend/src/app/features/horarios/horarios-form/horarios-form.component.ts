import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HorarioDisponivelRequest, HorarioDisponivelResponse } from '../../../core/models/horario.model';
import { HorarioService } from '../../../core/services/horario.service';
import { ProfissionalResponse } from '../../../core/models/profissional.model';
import { ProfissionalService } from '../../../core/services/profissional.service';

@Component({
  selector: 'app-horarios-form',
  templateUrl: './horarios-form.component.html',
  styleUrl: './horarios-form.component.css',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HorariosFormComponent implements OnInit {
  form: FormGroup;
  id?: number;
  profissionais$: Observable<ProfissionalResponse[]>;

  diasSemana = [
    { value: 'MONDAY', label: 'Segunda-feira' },
    { value: 'TUESDAY', label: 'Terça-feira' },
    { value: 'WEDNESDAY', label: 'Quarta-feira' },
    { value: 'THURSDAY', label: 'Quinta-feira' },
    { value: 'FRIDAY', label: 'Sexta-feira' },
    { value: 'SATURDAY', label: 'Sábado' },
    { value: 'SUNDAY', label: 'Domingo' }
  ];

  constructor(
    private fb: FormBuilder,
    private service: HorarioService,
    private profissionalService: ProfissionalService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      profissionalId: ['', Validators.required],
      diaSemana: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaFim: ['', Validators.required],
      duracaoConsultaMinutos: [30, Validators.required],
      vagasPorHorario: [1, Validators.required]
    });

    this.profissionais$ = this.profissionalService.list();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = +params['id'];
        this.service.get(this.id).subscribe((h: HorarioDisponivelResponse) => this.form.patchValue(h));
      }
    });
  }

  save() {
    const req: HorarioDisponivelRequest = this.form.value;
    if (this.id) {
      this.router.navigate(['/horarios']);
    } else {
      this.service.create(req).subscribe(() => this.router.navigate(['/horarios']));
    }
  }
}
