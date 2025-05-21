import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {
  @Output() createNote = new EventEmitter<void>();

  onCreateNoteClick(): void {
    this.createNote.emit();
  }
}
