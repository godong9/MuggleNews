import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: ['css/app.component.css'],
  template: `
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
    </nav>

    <p>Hello Angular Universal App</p>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
