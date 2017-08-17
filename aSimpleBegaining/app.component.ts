import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorate hero is:{{myHero}}</h2>
    <p>Heroes:</p>
    <ul>
       <li *ngFor='let hero of heroes'> 
          {{hero}}
       </li>
    </ul>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = ['Yolande','Feifei','Chou','Yafei']
  myHero = this.heroes[0];
}
