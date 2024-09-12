import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//Mesma importação da home
import mockData from "../../mocks/cursos-mock.json"

@Component({
  selector: 'app-teste-de-nivelamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teste-de-nivelamento.component.html',
  styleUrl: './teste-de-nivelamento.component.scss'
})

export class TesteDeNivelamentoComponent {
  public nivelUser = '';
  public testeTitle = 'Teste de nivelamento';
  public testeText = 'Seja muito bem-vindo(a) a <b>InovaHub</b> e ao teste de nivelamento! <br><br>Neste teste, vamos explorar diferentes abordagens e identificar os roteiros que melhor se alinham com suas necessidades e objetivos educacionais. Nosso objetivo é proporcionar uma experiência de aprendizado personalizada e eficaz.<br><br>Para começar esta jornada de descoberta, clique no botão abaixo e vamos começar!';
  public bvdOrResul: boolean = true
  public questaoAtual = 1;

  public perguntasTDN = mockData.perguntasTDN;

  constructor(){ }

  vaParaQuestoes(){
    this.bvdOrResul = false;

  }
}
