import { Component,OnInit,OnDestroy } from '@angular/core';

@Component({
	selector:'countdown-timer',
	template:`
	<p>{{message}}<p>
	`
})

export class CountdownTimerComponent implements OnInit{
   intervalId = 0;
   message = '' ;
   seconds = 11;
   clearTime(){ clearInterval(this.intervalId)};
   ngOnInit() {this.start();}
   ngOnDestroy() {this.clearTime()};
   start(){ this.countDown() };
   stop(){ 
   	  this.clearTime();
   	  this.message = `Holding at T-${this.seconds} seconds`};
   private countDown(){
   	this.clearTime();
   	this.intervalId = window.setInterval(()=>{
   		this.seconds-=1;
        if(this.seconds === 0){
        	this.message = `Blast off!`;
        }else{
        	if(this.seconds < 0){ this.seconds = 10;}
            this.message = `T-${this.seconds}seconds and counting`
        }
   	},1000)
   }
}
