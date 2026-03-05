import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Estatico } from '../estatico/estatico';


@Component({
  selector: 'app-afiliados',
  imports: [CommonModule],
  templateUrl: './afiliados.html',
  styleUrl: './afiliados.scss',
})
export class Afiliados {

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(Estatico, {
      width: '400px',
      disableClose: true // evita cerrar al hacer clic fuera
    });
  }


}
