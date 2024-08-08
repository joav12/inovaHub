import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

//Mesma importação da home
import mockData from "../../mocks/cursos-mock.json"

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss'
})
export class RoadmapComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    //Mesma explicação encontrada na search-bar
    this.router.events.subscribe((val: any) =>{
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
    if(this.course.aulas.length % 2 === 0){
      this.retaFinal = 4
    }
    else{
      this.retaFinal = 3
    }
  }

  //É italão, a magia do roadmap acontece nessa função abaixo parça
  curvpath(i:any){
    const trueIndex = i+1

    if(trueIndex % 2 != 0){
      if(this.espelhado){
        return 'class-ball-curve-odd-mp4'
      }
      else{
        return 'class-ball-curve-odd-mp2'
      }
    }
    else{
      if(this.espelhado){
        this.espelhado = false
        return 'class-ball-curve-mp4'
      }
      else{
        this.espelhado = true
        return 'class-ball-curve-mp2'
      }
    }

    return null
  }

  retornaFalse(){
    this.espelhado = false
    return true
  }
}
