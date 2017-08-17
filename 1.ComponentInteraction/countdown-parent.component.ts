import { Component } from '@angular/core';
import { CountdownTimerComponent } from './countdown-timer.component';

@Component({
	selector:'countdown-parent',
	template:`
     <h3>Countdown to Liftoff</h3>
     <button (click)="timer.start()">Start</button>
     <button (click)="timer.stop()">Stop</button>
     <div>
        {{timer.seconds}}
     </div>
     <countdown-timer #timer></countdown-timer>
	`
})

export class CountdownParentComponent{}
