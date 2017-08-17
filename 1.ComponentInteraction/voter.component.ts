import { Component,Output,Input,EventEmitter } from '@angular/core';

@Component({
	selector:'my-voter',
	template:`
     <h4>{{ name }}</h4>
     <button [disabled]="voted" (click)="vote(true)">agree</button>
     <button [disabled]="voted" (click)="vote(false)">disagree</button>
	`
})
export class VoterComponent{
@Input() name:string;
@Output() onVoted = new EventEmitter <boolean>();
voted = false;
vote(agree:boolean){
	this.voted = true;
    this.onVoted.emit(agree);
}
}
