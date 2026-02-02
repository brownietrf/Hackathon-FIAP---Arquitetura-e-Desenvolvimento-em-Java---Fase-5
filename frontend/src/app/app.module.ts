import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { PacientesListComponent } from './features/pacientes/pacientes-list/pacientes-list.component';
import { PacientesFormComponent } from './features/pacientes/pacientes-form/pacientes-form.component';
import { MaterialModule } from './material.module';
import { UnidadesListComponent } from './features/unidades/unidades-list/unidades-list.component';
import { ProfissionaisListComponent } from './features/profissionais/profissionais-list/profissionais-list.component';
import { AgendamentosListComponent } from './features/agendamentos/agendamentos-list/agendamentos-list.component';
import { ListaesperaListComponent } from './features/listaespera/listaespera-list/listaespera-list.component';
import { HorariosListComponent } from './features/horarios/horarios-list/horarios-list.component';

@NgModule({
  declarations: [
    PacientesListComponent,
    PacientesFormComponent,
    UnidadesListComponent,
    ProfissionaisListComponent,
    AgendamentosListComponent,
    ListaesperaListComponent,
    HorariosListComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
