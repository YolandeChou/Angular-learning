import { Component } from '@angular/core';

@Component({
	selector:'name-parent',
	template:`
     <h3>Mster controls {{names.length}} names:</h3>
     <name-child *ngFor='let name of names' [name]='name'></name-child>
	`
})
export class NameParentComponent{
	names = ['Mr.Chou','  ','Feifei'];
}
