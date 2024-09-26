import { Component, Sanitizer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

//Mesma importação da home
import mockData from "../../mocks/cursos-mock.json"
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-aula',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aula.component.html',
  styleUrl: './aula.component.scss'
})
export class AulaComponent {
  constructor(private route: ActivatedRoute, private router: Router, private sanitazer: DomSanitizer){
    this.router.events.subscribe((val: any) =>{
      this.pegaNomeCursoURL()
      this.especifcCourse()
    })
  }

  public courseName: any;
  public classId: any;
  public course: any;
  public tipoAula = 'nenhuma';
  public aulasFeitasNum: any;
  public aulaVideo: any;

  pegaNomeCursoURL(){
    this.courseName = this.route.snapshot.paramMap.get('curso');
    this.classId = this.route.snapshot.paramMap.get('aulaId');
  }

  especifcCourse(){
    for(let value of mockData.cursos){
      if(value.nomeUrl == this.courseName){
        this.course = value;
      }
    }
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

  tamanhoBarraAulas(){
    const porcentagemDeAulasFeitas = (this.aulasFeitasNum * 100) / this.course.aulas.length

    return { 'background': "linear-gradient(to right, #0063F7 " + porcentagemDeAulasFeitas + "%, #C7C9D9 " + porcentagemDeAulasFeitas + "%)" }
  }

  voltaEspecial(){
    if(this.tipoAula == 'nenhuma'){
      this.router.navigate([`/roadmap/${this.course.nomeUrl}`], { relativeTo: this.route });
    }
    else{
      this.tipoAula = 'nenhuma';
    }
  }

  finalizaAula(){
    sessionStorage.setItem(`aulaDados${this.classId-1}${this.course.nomeUrl}`, 'finishedClass');
    sessionStorage.setItem(`aulaDados${this.classId}${this.course.nomeUrl}`, 'pendente');
    sessionStorage.setItem(`aulasFeitas${this.course.nomeUrl}`, this.classId);
    if(sessionStorage.getItem('aulasfeitas')){
      sessionStorage.setItem('aulasfeitas', `${parseInt(sessionStorage.getItem('aulasfeitas')!, 10) + 1}`);
    }
    else{
      sessionStorage.setItem('aulasfeitas', "1");
    }

    if((this.classId - 1) == 0){
      if(sessionStorage.getItem('cursosComecados')){
        sessionStorage.setItem('cursosComecados', `${parseInt(sessionStorage.getItem('cursosComecados')!, 10) + 1}`);
      }
      else{
        sessionStorage.setItem('cursosComecados', `1`)
      }
    }
    else if(this.classId == this.course.aulas.length){
      if(sessionStorage.getItem('cursosFinalizados')){
        sessionStorage.setItem('cursosFinalizados', `${parseInt(sessionStorage.getItem('cursosFinalizados')!, 10) + 1}`);
      }
      else{
        sessionStorage.setItem('cursosFinalizados', `1`)
      }
    }
    this.router.navigate([`/roadmap/${this.course.nomeUrl}`]);
  }

  public retornaVideo(): SafeResourceUrl{
    this.aulaVideo = this.course.aulas[this.classId-1].video;
    return this.sanitazer.bypassSecurityTrustResourceUrl(this.aulaVideo)
  }

  ngOnInit(): void{
    this.retornaVideo();
  }
}
