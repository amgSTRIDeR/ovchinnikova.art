import {Component, inject} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  private readonly meta = inject(Meta);

  constructor() {
    this.meta.updateTag({
      name: 'description',
      content: 'Get in touch with contemporary artist Olga Ovchinnikova for inquiries about artworks, collaborations, and exhibitions.'
    });
  }
}
