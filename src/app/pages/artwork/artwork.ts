import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

import {Artwork, getArtwork,} from '../../data/artworks.data';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-artwork',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './artwork.html',
  styleUrl: './artwork.scss',
  host: {
    '(window:keydown.escape)': 'closeFullscreen()'
  }
})
export class ArtworkPage {
  isFullScreen = false;
  readonly artwork?: Artwork;
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

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

  openFullscreen(): void {
    this.isFullScreen = true;
  }

  closeFullscreen(): void {
    this.isFullScreen = false;
  }
}
