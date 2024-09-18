import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configs',
  standalone: true,
  imports: [],
  templateUrl: './configs.component.html',
  styleUrl: './configs.component.scss'
})
export class ConfigsComponent {
  constructor(private router: Router) { }

  public reiniciarMVP(): void{
    sessionStorage.clear();
    this.router.navigate(['/']);
    location.reload();
  }
}
