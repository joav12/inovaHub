import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {RouterModule} from '@angular/router';

//Salve italãaao suave? Deixar esses comentários aqui para explicar algumas coisas principalmente do TS kkk

//Esse código abaixo importa o mock de dados de cursos para teste
import mockData from "../../mocks/cursos-mock.json"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  //Só to definindo uma variavel para deixar os dados do mock (apenas presisarei chamar ela para utilizar os dados do "banco")
  public cursos = mockData.cursos;

  ngOnInit(): void {

  }
}
