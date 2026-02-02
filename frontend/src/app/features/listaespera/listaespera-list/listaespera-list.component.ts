import { Component, OnInit } from '@angular/core';
import { ListaEsperaService } from '../../../core/services/listaespera.service';
import { ListaEsperaResponse } from '../../../core/models/listaespera.model';

@Component({
  selector: 'app-listaespera-list',
  templateUrl: './listaespera-list.component.html',
  standalone: false
})
export class ListaesperaListComponent implements OnInit {
  lista: ListaEsperaResponse[] = [];

  constructor(private service: ListaEsperaService) {}

  ngOnInit(): void {
    // Example: fetch a specialty
  }
}