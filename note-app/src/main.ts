import { bootstrapApplication } from '@angular/platform-browser';
import { NotesComponent } from './app/notes/notes.component';

bootstrapApplication(NotesComponent)
  .catch(err => console.error(err));
