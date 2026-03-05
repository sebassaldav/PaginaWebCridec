import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-estatico',
  imports: [MatDialogContent, MatDialogActions, MatDialogModule],
  templateUrl: './estatico.html',
  styleUrl: './estatico.scss',
})
export class Estatico {

}
