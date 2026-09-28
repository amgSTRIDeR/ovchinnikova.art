import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import {
  Artwork,
  getArtwork,
} from '../../data/artworks.data';

@Component({
  selector: 'app-artwork',
  imports: [RouterLink],
  templateUrl: './artwork.html',
  styleUrl: './artwork.scss',
})
export class ArtworkPage {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly artwork?: Artwork;

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';

    this.artwork = getArtwork(slug);

    if (this.artwork) {
      this.title.setTitle(
        `${this.artwork.title} — Olga Ovchinnikova`
      );

      this.meta.updateTag({
        name: 'description',
        content:
          `${this.artwork.title}, ${this.artwork.year}. ` +
          `${this.artwork.meta}. Artwork by Olga Ovchinnikova.`,
      });
    }
  }
}
