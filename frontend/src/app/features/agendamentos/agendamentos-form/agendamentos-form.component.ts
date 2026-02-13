import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AgendamentoRequest, AgendamentoResponse } from '../../../core/models/agendamento.model';
import { AgendamentoService } from '../../../core/services/agendamento.service';
import { PacienteResponse } from '../../../core/models/paciente.model';
import { PacienteService } from '../../../core/services/paciente.service';
import { ProfissionalResponse } from '../../../core/models/profissional.model';
import { ProfissionalService } from '../../../core/services/profissional.service';

@Component({
  selector: 'app-agendamentos-form',
  templateUrl: './agendamentos-form.component.html',
  styleUrl: './agendamentos-form.component.css',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AgendamentosFormComponent implements OnInit {
  form: FormGroup;
  id?: number;
  pacientes$: Observable<PacienteResponse[]>;
  profissionais$: Observable<ProfissionalResponse[]>;
  successMessage: string = '';
  errorMessage: string = '';

  tiposAtendimento = [
    'CONSULTA',
    'EXAME',
    'RETORNO',
    'EMERGENCIA'
  ];

  constructor(
    private fb: FormBuilder,
    private service: AgendamentoService,
    private pacienteService: PacienteService,
    private profissionalService: ProfissionalService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.form = this.fb.group({
      pacienteId: ['', Validators.required],
      profissionalId: ['', Validators.required],
      dataAgendamento: ['', Validators.required],
      horaAgendamento: ['', Validators.required],
      tipoAtendimento: ['CONSULTA'],
      observacoes: ['']
    });

    this.pacientes$ = this.pacienteService.list();
    this.profissionais$ = this.profissionalService.list();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = +params['id'];
        this.service.get(this.id).subscribe((a: AgendamentoResponse) => this.form.patchValue(a));
      }
    });
  }

  save() {
    this.successMessage = '';
    this.errorMessage = '';

    const req: AgendamentoRequest = this.form.value;

    this.service.create(req).subscribe({
      next: () => {
        this.successMessage = 'Agendamento criado com sucesso!';
        this.cdr.detectChanges();
        setTimeout(() => this.router.navigate(['/agendamentos']), 2000);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || err.error?.error || 'Erro ao criar agendamento';
        this.cdr.detectChanges();
      }
    });
  }
}
