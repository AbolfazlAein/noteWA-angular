import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Note } from '../../models/note';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit {
  @Input() note!: Note;
  @Output() save = new EventEmitter<Note>();
  @Output() back = new EventEmitter<void>();
  
  editedNote!: Note;
  
  ngOnInit(): void {
    // Create a copy of the note to avoid direct mutation
    this.editedNote = { ...this.note };
  }
  
  onTitleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.editedNote.title = target.value;
  }
  
  onContentChange(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.editedNote.content = target.value;
  }
  
  saveNote(): void {
    this.save.emit(this.editedNote);
  }
  
  goBack(): void {
    this.back.emit();
  }
}
