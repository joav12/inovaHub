import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

//Mesma importação da home
import mockData from "../../mocks/cursos-mock.json"
import { Console } from 'node:console';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss'
})
export class RoadmapComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    //Mesma explicação encontrada na search-bar
    this.router.events.subscribe((val: any) =>{
      setTimeout(()=>{
        this.desceTodaTela();
      }, 200)
      this.especifcCourse()
      this.pegaNomeCursoURL()
      this.verificaTamanhoCurso()
      this.espelhado = false;
      this.parOuImpar = false;
    })
  }

  public courseName: any
  public course: any;
  public espelhado:boolean = false;
  public parOuImpar:boolean = false;
  public retaFinal = 3;
  public aulaStatus = '';
  public retaFinalClass = '';
  public iconName = 'arrow_right';
  public aulasFeitasNum: any;
  public hoverMenu: boolean = false;
  public topHoverMenu: string = '';
  public leftHoverMenu: string = '';
  public hoverTitle: string = '';
  public hoverDesc: string = '';
  public nuvemClass: string = 'nuvemDireita';

  //Essa função pega apenas o curso que tem o nome que está no parametro da url
  especifcCourse(){
    for(let value of mockData.cursos){
      if(value.nomeUrl == this.courseName){
        this.course = value;
      }
    }
  }

  //acredito que o nome seja auto-explicativo kkkkk
  pegaNomeCursoURL(){
    this.courseName = this.route.snapshot.paramMap.get('curso');
  }

  verificaTamanhoCurso(){
    if(this.course.aulas.length <= 2){
      this.retaFinal = this.course.aulas.length
    }
    else{
      if(this.course.aulas.length % 2 === 0){
        this.retaFinal = 4
      }
      else{
        this.retaFinal = 3
      }
    }


  }

  //É italão, a magia do roadmap acontece nessa função abaixo parça
  curvpath(i:any){
    const trueIndex = i+1

    if(trueIndex % 2 != 0){
      if(this.espelhado){
        return `class-ball-curve-odd-mp4 ${this.aulaStatus}`
      }
      else{
        return `class-ball-curve-odd-mp2 ${this.aulaStatus}`
      }
    }
    else{
      if(this.espelhado){
        this.espelhado = false
        return `class-ball-curve-mp4 ${this.aulaStatus}`
      }
      else{
        this.espelhado = true
        return `class-ball-curve-mp2 ${this.aulaStatus}`
      }
    }

    return null
  }

  resetaEspelhado(){
    this.espelhado = false
    return true
  }

  verificaAulasCursos(i: any, nomeCurso: any){
    const aulaDados = sessionStorage.getItem(`aulaDados${i}${nomeCurso}`);

    if(i == 0 && aulaDados == null){
      this.aulaStatus = 'pendingClass'
      this.iconName = 'arrow_right'
    }
    else{
      if(aulaDados == null){
        this.aulaStatus = 'lockedClass'
        this.iconName = 'lock'
      }
      else if(aulaDados == 'pendente'){
        this.aulaStatus = 'pendingClass'
        this.iconName = 'arrow_right'
      }
      else{
        this.aulaStatus = 'finishedClass'
        this.iconName = 'arrow_right'
      }
    }
    this.retaFinalClass = `class-ball ${this.aulaStatus}`
  }

  verificaAulasFeitas(nomeCurso: any){
    this.aulasFeitasNum = sessionStorage.getItem(`aulasFeitas${nomeCurso}`);

    if(this.aulasFeitasNum == null){
      return `${0}`;
    }
    else{
      return `${this.aulasFeitasNum}`
    }
  }

  createHoveMenu(idAula: any, posMouse: any){
    this.topHoverMenu = `${posMouse.layerY}px`;
    this.leftHoverMenu = `${posMouse.layerX}px`;
    this.hoverTitle = this.course.aulas[idAula].nome;
    this.hoverDesc = this.course.aulas[idAula].title;
    this.hoverMenu = true;
  }

  tamanhoBarraAulas(){
    const porcentagemDeAulasFeitas = (this.aulasFeitasNum * 100) / this.course.aulas.length

    return { 'background': "linear-gradient(to right, #0063F7 " + porcentagemDeAulasFeitas + "%, #C7C9D9 " + porcentagemDeAulasFeitas + "%)" }
  }

 public mudaNuvem(): string{
    if(this.nuvemClass == 'nuvemDireita'){
      this.nuvemClass = 'nuvemEsquerda'
      return this.nuvemClass
    }
    else{
      this.nuvemClass = 'nuvemDireita'
      return this.nuvemClass
    }
  }

  desceTodaTela(){
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }
}
