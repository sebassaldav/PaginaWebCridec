import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlosarioService } from './glosario.service';
import { Termino } from './glosario.model';
@Component({
  selector: 'app-glosario',
  imports: [],
  templateUrl: './glosario.html',
  styleUrl: './glosario.scss',
})
export class Glosario {


alfabeto: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  terminos: Termino[] = [];
  terminosOrdenados: Termino[] = [];

  letraSeleccionada: string = '';

  constructor(private glosarioService: GlosarioService) {}

  ngOnInit(): void {

    this.terminos = this.glosarioService.getTerminos();

    this.terminosOrdenados = this.terminos.sort((a, b) =>
      a.concepto.localeCompare(b.concepto)
    );

  }

  filtrarPorLetra(letra: string) {
    this.letraSeleccionada = letra;
  }

  limpiarFiltro() {
    this.letraSeleccionada = '';
  }

  get terminosFiltrados(): Termino[] {

    if (!this.letraSeleccionada) {
      return this.terminosOrdenados;
    }

    return this.terminosOrdenados.filter(termino =>
      termino.concepto.toUpperCase().startsWith(this.letraSeleccionada)
    );

  }

}