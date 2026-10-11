import {Component, inject} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-cv',
  styleUrl: './cv.scss',
  templateUrl: './cv.html',
})
export class Cv {
  private readonly meta = inject(Meta);

  constructor() {
    this.meta.updateTag({
      name: 'description',
      content: 'Explore the curriculum vitae of contemporary artist Olga Ovchinnikova, including her artistic experience and achievements.'
    });
  }
}
