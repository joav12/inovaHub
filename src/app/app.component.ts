import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { CommonModule, Location } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet,
      SearchBarComponent,
      CommonModule
    ]
})
export class AppComponent {
  public userName = 'André';
  public page = '';

  constructor(private location: Location) {}

  title = 'inovaHub';

  verifyPage(){
    return this.page = this.location.path();
  }

  ngOnInit(): void {
    this.verifyPage()
  }
}
