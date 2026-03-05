import { Injectable } from '@angular/core';
import { Termino } from './glosario.model';

@Injectable({
  providedIn: 'root',
})

export class GlosarioService {

  private terminos: Termino[] = [
    { concepto: 'Angular desde cero', definicion: 'Juan Pérez' },
    { concepto: 'Backend con Spring', definicion: 'Ana López' },
    { concepto: 'Clean Code', definicion: 'Robert Martin' },
    { concepto: 'Desarrollo Ágil', definicion: 'Carlos Ruiz' },
    { concepto: 'Arquitectura de Software', definicion: 'Laura Gómez' },
    { concepto: 'Bases de Datos Avanzadas', definicion: 'Pedro Ramírez' }
  ];

  getTerminos(): Termino[] {
    return this.terminos;
  }

}