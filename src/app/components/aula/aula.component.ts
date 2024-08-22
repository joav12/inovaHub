import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

//Mesma importação da home
import mockData from "../../mocks/cursos-mock.json"

@Component({
  selector: 'app-aula',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aula.component.html',
  styleUrl: './aula.component.scss'
})
export class AulaComponent {
  constructor(private route: ActivatedRoute, private router: Router){
    this.router.events.subscribe((val: any) =>{
      this.pegaNomeCursoURL()
      this.especifcCourse()
    })
  }

  public courseName: any;
  public classId: any;
  public course: any;

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


}
