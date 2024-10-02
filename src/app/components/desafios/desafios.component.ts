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
  public tempoDiario: number = Date.now() - Date.parse('December 31 2015 8:59:59');;
  public tempoSemanal: number = Date.now();
  public diaNumero: number = 0;

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

  public diaDaSemana(dia: any): number{
    if(dia == 'Monday'){
      return this.diaNumero = 6;
    }
    else if(dia == 'Tuesday'){
      return this.diaNumero = 5;
    }
    else if(dia == 'Wednesday'){
      return this.diaNumero = 4;
    }
    else if(dia == 'Thursday'){
      return this.diaNumero = 3;
    }
    else if(dia == 'Friday'){
      return this.diaNumero = 2;
    }
    else if(dia == 'Saturday'){
      return this.diaNumero = 1;
    }
    else if(dia == 'Sunday'){
      return this.diaNumero = 0;
    }
    return 0;
  }

  ngOnInit(): void{
    this.verificaCursosEAulas();
    // this.tempoDiario = this.tempoDiario - Date.parse('December 31 2015 5:59:59');
  }
}
