import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import mockData from "../../mocks/cursos-mock.json"
import { CommonModule } from '@angular/common';
import { MyFilterPipe } from '../../pipes/filter.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    //Esse "MyFilterPipe" é um pipe que cria um filtro para o for no html (vc pode enconcrar esse arquivo na pasta "pipes")
    MyFilterPipe,
    RouterModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})

export class SearchBarComponent {
  public cursos = mockData.cursos;

  //Variavel definida para pegar o valor do input
  search = new FormControl('');
}
