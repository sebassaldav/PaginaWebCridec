import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-institucional',
  imports: [Navbar, Footer],
  templateUrl: './institucional.html',
  styleUrl: './institucional.scss',
})
export class Institucional {

}
