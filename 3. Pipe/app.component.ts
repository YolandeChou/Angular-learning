import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html',
})
export class AppComponent {
   birtday = new Date(1995,10,23);
   toggle = true;
   get format() { return this.toggle ? 'shortDate':'fullDate'}
   toggleFormat() {this.toggle = !this.toggle}
}
