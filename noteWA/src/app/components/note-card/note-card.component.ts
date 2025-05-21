import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models/note';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {
  @Input() note!: Note;
  @Output() noteClick = new EventEmitter<Note>();

  onNoteClick(): void {
    this.noteClick.emit(this.note);
  }
}
