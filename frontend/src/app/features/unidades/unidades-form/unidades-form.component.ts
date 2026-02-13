import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UnidadeSaudeRequest, UnidadeSaudeResponse } from '../../../core/models/unidade.model';
import { UnidadeService } from '../../../core/services/unidade.service';

@Component({
  selector: 'app-unidades-form',
  templateUrl: './unidades-form.component.html',
  styleUrl: './unidades-form.component.css',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UnidadesFormComponent implements OnInit {
  form: FormGroup;
  id?: number;

  constructor(
    private fb: FormBuilder,
    private service: UnidadeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cnes: ['', Validators.required],
      endereco: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      cep: [''],
      telefone: [''],
      email: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = +params['id'];
        this.service.get(this.id).subscribe((u: UnidadeSaudeResponse) => this.form.patchValue(u));
      }
    });
  }

  save() {
    const req: UnidadeSaudeRequest = this.form.value;
    if (this.id) {
      this.service.update(this.id, req).subscribe(() => this.router.navigate(['/unidades']));
    } else {
      this.service.create(req).subscribe(() => this.router.navigate(['/unidades']));
    }
  }
}
