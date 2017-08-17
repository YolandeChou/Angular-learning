import { Component } from '@angular/core';

@Component({
	selector:'vote-taker',
	template:`
    <h3>Should mainkind Colonize the Universe?</h3>
    <span>Agree:{{agree}}</span>
    <span>Disagree:{{disagree}}</span>
    <my-voter *ngFor="let voter of voters" [name]="voter" (onVoted)='onVoted($event)'></my-voter>
	`
})

export class VotetakerComponent{
	agree = 0;
    disagree = 0;
    voters:string[]=['Yolande','Mr.Chou','Feifei'];
    onVoted(agree:boolean){
    	agree ? this.agree++ : this.disagree++;
    }

}
