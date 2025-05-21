import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  newNote: string = '';
  notes: string[] = [];
  editIndex: number | null = null;
  editText: string = '';

  ngOnInit() {
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
