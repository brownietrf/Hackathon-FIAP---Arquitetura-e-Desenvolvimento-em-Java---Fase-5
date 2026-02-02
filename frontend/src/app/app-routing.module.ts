import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesListComponent } from './features/pacientes/pacientes-list/pacientes-list.component';
import { PacientesFormComponent } from './features/pacientes/pacientes-form/pacientes-form.component';
import { UnidadesListComponent } from './features/unidades/unidades-list/unidades-list.component';
import { ProfissionaisListComponent } from './features/profissionais/profissionais-list/profissionais-list.component';
import { AgendamentosListComponent } from './features/agendamentos/agendamentos-list/agendamentos-list.component';
import { ListaesperaListComponent } from './features/listaespera/listaespera-list/listaespera-list.component';
import { HorariosListComponent } from './features/horarios/horarios-list/horarios-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'pacientes', pathMatch: 'full' },
  { path: 'pacientes', component: PacientesListComponent },
  { path: 'pacientes/novo', component: PacientesFormComponent },
  { path: 'pacientes/:id', component: PacientesFormComponent },
  { path: 'unidades', component: UnidadesListComponent },
  { path: 'profissionais', component: ProfissionaisListComponent },
  { path: 'agendamentos', component: AgendamentosListComponent },
  { path: 'lista-espera', component: ListaesperaListComponent },
  { path: 'horarios', component: HorariosListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
