import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import mockData from "../../mocks/cursos-mock.json"
import { CommonModule } from '@angular/common';
import { MyFilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MyFilterPipe
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})

export class SearchBarComponent {
  public cursos = mockData.cursos;

  search = new FormControl('');
}
