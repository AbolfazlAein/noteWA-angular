import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  newNote: string = '';
  notes: string[] = [];
  editIndex: number | null = null;
  editText: string = '';

  constructor() {
    const saved = localStorage.getItem('notes');
    if (saved) {
      this.notes = JSON.parse(saved);
    }
  }

  addNote() {
    if (this.newNote.trim()) {
      this.notes.push(this.newNote.trim());
      this.newNote = '';
      this.saveNotes();
    }
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.saveNotes();
  }

  startEdit(index: number) {
    this.editIndex = index;
    this.editText = this.notes[index];
  }

  saveEdit(index: number) {
    if (this.editText.trim()) {
      this.notes[index] = this.editText.trim();
      this.editIndex = null;
      this.editText = '';
      this.saveNotes();
    }
  }

  cancelEdit() {
    this.editIndex = null;
    this.editText = '';
  }

  saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
