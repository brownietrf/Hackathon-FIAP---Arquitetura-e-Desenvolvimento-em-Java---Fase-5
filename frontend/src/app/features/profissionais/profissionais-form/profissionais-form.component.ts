import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProfissionalRequest, ProfissionalResponse } from '../../../core/models/profissional.model';
import { ProfissionalService } from '../../../core/services/profissional.service';
import { UnidadeSaudeResponse } from '../../../core/models/unidade.model';
import { UnidadeService } from '../../../core/services/unidade.service';

@Component({
  selector: 'app-profissionais-form',
  templateUrl: './profissionais-form.component.html',
  styleUrl: './profissionais-form.component.css',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfissionaisFormComponent implements OnInit {
  form: FormGroup;
  id?: number;
  unidades$: Observable<UnidadeSaudeResponse[]>;

  especialidades = [
    'CARDIOLOGIA',
    'DERMATOLOGIA',
    'GINECOLOGIA',
    'PEDIATRIA',
    'ORTOPEDIA',
    'OFTALMOLOGIA',
    'NEUROLOGIA',
    'PSIQUIATRIA',
    'CLINICA_GERAL',
    'OUTRAS'
  ];

  constructor(
    private fb: FormBuilder,
    private service: ProfissionalService,
    private unidadeService: UnidadeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: [''],
      registroProfissional: ['', Validators.required],
      especialidade: ['', Validators.required],
      telefone: [''],
      email: [''],
      unidadeSaudeId: ['', Validators.required]
    });

    this.unidades$ = this.unidadeService.list();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = +params['id'];
        this.service.get(this.id).subscribe((p: ProfissionalResponse) => this.form.patchValue(p));
      }
    });
  }

  save() {
    const req: ProfissionalRequest = this.form.value;
    if (this.id) {
      this.service.update(this.id, req).subscribe(() => this.router.navigate(['/profissionais']));
    } else {
      this.service.create(req).subscribe(() => this.router.navigate(['/profissionais']));
    }
  }
}
