import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent} from "./app.component";
import { HeroParentComponent } from './hero-parent.component';
import { HeroChildComponent } from './hero-child.component';
import { NameChildComponent } from './name-child.component';
import { NameParentComponent } from './name-parent.component';
import { VotetakerComponent } from './votetaker.component';
import { VoterComponent } from './voter.component';
import { CountdownTimerComponent } from './countdown-timer.component';
import { CountdownParentComponent } from './countdown-parent.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    HeroParentComponent,
    HeroChildComponent,
    NameChildComponent,
    NameParentComponent,
    VoterComponent,
    VotetakerComponent,
    CountdownParentComponent,
    CountdownTimerComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
