import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
