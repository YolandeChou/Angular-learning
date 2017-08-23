import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
	selector:'hero-form',
	templateUrl:'hero-form.component.html',
	styleUrls:['hero-form.component.css']
})

export class HeroFormComponent{

	powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submited = false;

    onSubmit(){ this.submited = true };

    newHero(){ this.model = new Hero(42,'','') };

}
