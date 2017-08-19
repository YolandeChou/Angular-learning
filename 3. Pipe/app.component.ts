<p>My birtday is {{birtday|date:format}}</p>
<button (click)="toggleFormat()">toggle</button>
<div>
   <div>
     <label>Number:</label>
     <input type="text" [(ngModel)]="power" />
   </div>
   <div>
      <label>Exp:</label>
      <input type="text" [(ngModel)]="factor" />
   </div>
   <label>The resault:{{power|exponentialStrength:factor}}</label>
</div>
