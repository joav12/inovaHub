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
  public testeText = 'Seja muito bem-vindo(a) a <b>InovaHub</b> e ao teste de nivelamento! <br><br> Neste teste, vamos explorar diferentes abordagens e identificar os roteiros que melhor se alinham com suas necessidades e objetivos educacionais. Nosso objetivo é proporcionar uma experiência de aprendizado personalizada e eficaz.<br><br>Para começar esta jornada de descoberta, clique no botão abaixo e vamos começar!';
  public bvdOrResul: boolean = true
  public questaoAtual = 1;
  public btnCont = true;
  public respostasSalvas: Array<any> = [];
  public guardaResp: any;
  public btnComecaText = 'Começar';

  public perguntasTDN = mockData.perguntasTDN;

  constructor(){ }

  selecionaResposta(questao: any, resposta: any){
    var todosOsBottoesAtivos = document.querySelectorAll('.ativo');
    if(todosOsBottoesAtivos[0]){
      todosOsBottoesAtivos[0].classList.add('desativado');
      todosOsBottoesAtivos[0].classList.remove('ativo');
    }

    var buttao = document.getElementById(`btnQ${questao}R${resposta}`)
    buttao?.classList.add('ativo');
    buttao?.classList.remove('desativado');

    this.btnCont = false;
    this.guardaResp = {'questao': questao, 'respostaEscolhida': resposta}
  }

  continuaFinalizaTeste(){
    this.respostasSalvas.push(this.guardaResp);

    if(this.perguntasTDN[this.questaoAtual]){
      this.questaoAtual++
      this.btnCont = true;
    }
    else{
      var pontuacao = 0;
      for(let value of this.respostasSalvas){
        if(this.perguntasTDN[value.questao - 1].respostas[value.respostaEscolhida - 1].eACorreta){
          pontuacao++;
        }
      }

      if(pontuacao <= 1){
        this.nivelUser = 'iniciante'
      }
      else if(pontuacao == 2){
        this.nivelUser = 'intermediario'
      }
      else{
        this.nivelUser = 'avancado'
      }

      this.testeShowResult()
    }
  }

  testeShowResult(){
    if(this.nivelUser == 'iniciante'){
      this.testeTitle = `Seu nivel é: Iniciante`;
      this.testeText = "Um perfil iniciante na área de finanças é alguém que está nos estágios iniciais de sua jornada de compreensão do mundo financeiro. <br><br> Essa pessoa já possui um entendimento básico de conceitos como orçamento e investimento, mas está no processo de aprofundar esse conhecimento.";
    }
    else if(this.nivelUser == 'intermediario'){
      this.testeTitle = `Seu nivel é: Intermediário`
      this.testeText = "Um perfil intermediário é de alguém que ja tém um conhecimento bom sobre finanças mas ainda não é um mestre sobre o assunto.";
    }
    else{
      this.testeTitle = `Seu nivel é: Avançado`
      this.testeText = "PARABÉNS! Seu perfil é avançado <br><br> Você definitivamente sabe sobre finânças";
    }

    this.btnComecaText = "Finalizar";
    this.bvdOrResul = true;
  }

  vaParaQuestoes(){
    if(this.nivelUser == ''){
      this.bvdOrResul = false;
    }
    else{
      sessionStorage.setItem('nivelUser', this.nivelUser);
      location.reload();
    }
  }
}
