import {Component, inject} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-bio',
  styleUrl: './bio.scss',
  templateUrl: './bio.html',
})
export class Bio {
  private readonly meta = inject(Meta);

  constructor() {
    this.meta.updateTag({
      name: 'description',
      content: 'Learn about Olga Ovchinnikova, her artistic background, creative journey, and approach to contemporary art.'
    });
  }
}
