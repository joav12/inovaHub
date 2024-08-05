import { Component } from '@angular/core';

@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.scss'
})
export class ContaComponent {
  public userName = 'André Matzumura'
  public userLevel = 'Intermediário'
  public firstLetters = ''

  firstLettersSeparator(){
    var splitedName = this.userName.split(' ');

    for (let i = 0; i < splitedName.length; i++) {
      let firstLetter = splitedName[i][0];
      this.firstLetters += firstLetter;
    }
  }

  ngOnInit(): void {
    this.firstLettersSeparator()
  }
}
