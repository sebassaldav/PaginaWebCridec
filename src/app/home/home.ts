import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home',
  imports: [RouterModule, Navbar, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
