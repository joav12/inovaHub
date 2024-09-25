import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import {RouterModule} from '@angular/router';

import mockData from "../../mocks/cursos-mock.json"

@Component({
  selector: 'app-desafios',
  standalone: true,
  imports: [NgFor, RouterModule, CommonModule],
  templateUrl: './desafios.component.html',
  styleUrl: './desafios.component.scss'
})
export class DesafiosComponent {
  public desafios: any = mockData.desafios;
  public cursosFinalizados: number = 0;
  public cursosComecados: number = 0;
  public aulasFeitasNum: number = 0;

  private verificaCursosEAulas(): void{
    this,this.cursosFinalizados = Number(sessionStorage.getItem('cursosFinalizados'));
    this.cursosComecados = Number(sessionStorage.getItem('cursosComecados'));
    this.aulasFeitasNum = Number(sessionStorage.getItem('aulasfeitas'));
  }

  public tamanhoBarraAulas(dados: any, tipo: string): object{
    if(tipo == 'diario'){
      const porcentagemDeAulasFeitas = (this.aulasFeitasNum * 100) / dados.numeroDeObjetivos

      return { 'background': "linear-gradient(to right, #0063F7 " + porcentagemDeAulasFeitas + "%, #C7C9D9 " + porcentagemDeAulasFeitas + "%)" }
    }
    else{
      const porcentagemDeCursos = (this.cursosFinalizados * 100) / dados.numeroDeObjetivos

      return { 'background': "linear-gradient(to right, #0063F7 " + porcentagemDeCursos + "%, #C7C9D9 " + porcentagemDeCursos + "%)" }
    }
  }

  ngOnInit(): void{
    this.verificaCursosEAulas();
  }
}
