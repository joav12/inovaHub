import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//Mesma importação da home
import mockData from "../../mocks/cursos-mock.json"

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss'
})
export class RoadmapComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    //Mesma explicação encontrada na search-bar
    this.router.events.subscribe((val: any) => this.pegaNomeCursoURL())
  }

  public courseName: any
  public course: any;

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

  ngOnInit(): void {
    this.especifcCourse()
  }
}
