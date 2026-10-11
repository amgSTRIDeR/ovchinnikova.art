import {Component, inject} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-statement',
  styleUrl: './statement.scss',
  templateUrl: './statement.html',
})
export class Statement {
  private readonly meta = inject(Meta);

  constructor() {
    this.meta.updateTag({
      name: 'description',
      content: 'Read the artist statement of Olga Ovchinnikova and explore the ideas and inspiration behind her artwork.'
    });
  }
}
