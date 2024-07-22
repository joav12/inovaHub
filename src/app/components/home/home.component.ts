import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import mockData from "../../mocks/cursos-mock.json"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public cursos = mockData.cursos;

  ngOnInit(): void {

  }
}
