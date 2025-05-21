import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  selectedNote: Note | null = null;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.notes = this.noteService.getNotes();
  }

  createNewNote(): void {
    const newNote = this.noteService.createNote();
    this.notes = [newNote, ...this.notes];
    this.noteService.saveNotes(this.notes);
    this.selectedNote = newNote;
  }

  selectNote(note: Note): void {
    this.selectedNote = note;
  }

  saveNote(updatedNote: Note): void {
    this.notes = this.noteService.updateNote(updatedNote.id, updatedNote);
    this.selectedNote = null;
  }

  backToList(): void {
    this.selectedNote = null;
  }
}
