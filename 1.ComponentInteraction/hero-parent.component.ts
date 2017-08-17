import { Component } from '@angular/core';
import { HEROES } from './hero'

@Component({
	selector:'hero-parent',
	template:`
	<h3>{{master}} Control {{heroes.length}} heroes:</h3>
	<hero-child *ngFor="let hero of heroes" [hero]="hero" [master]="master">
	</hero-child>
	`
})

export class HeroParentComponent{
	heroes=HEROES;
	master='Master';
}
