import { Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private STORAGE_KEY = 'notes';

  constructor() { }

  getNotes(): Note[] {
    const notesString = localStorage.getItem(this.STORAGE_KEY);
    if (!notesString) return [];
    try {
      return JSON.parse(notesString);
    } catch (e) {
      console.error('Error parsing notes from localStorage:', e);
      return [];
    }
  }

  saveNotes(notes: Note[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(notes));
  }

  createNote(title: string = 'Untitled Note', content: string = ''): Note {
    const now = new Date().toISOString();
    return {
      id: Date.now().toString(),
      title,
      content,
      createdAt: now,
      updatedAt: now
    };
  }

  updateNote(noteId: string, updatedFields: Partial<Note>): Note[] {
    const notes = this.getNotes();
    const updatedNotes = notes.map(note => {
      if (note.id === noteId) {
        return { 
          ...note, 
          ...updatedFields,
          updatedAt: new Date().toISOString() 
        };
      }
      return note;
    });
    this.saveNotes(updatedNotes);
    return updatedNotes;
  }
}
