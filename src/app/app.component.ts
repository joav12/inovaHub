import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { TesteDeNivelamentoComponent } from './components/teste-de-nivelamento/teste-de-nivelamento.component';
import { CommonModule, Location } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet,
      SearchBarComponent,
      TesteDeNivelamentoComponent,
      CommonModule
    ]
})
export class AppComponent {
  public userName = 'André';
  public page = '';
  public nivelUser = '';

  constructor(private location: Location, private router: Router) {
    //Essa função verifica a url e qualquer mudança que ocorre nela. Ele faz isso para mudar o estilo dos botões da navbar
    this.router.events.subscribe((val: any) => this.page = this.location.path())
  }

  title = 'inovaHub';

}
