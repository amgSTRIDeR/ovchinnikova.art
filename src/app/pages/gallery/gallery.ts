import {Component, inject} from '@angular/core';
import {Artwork, ARTWORKS} from '../../data/artworks.data';
import {RouterLink} from '@angular/router';
import {Meta} from '@angular/platform-browser';

@Component({
  imports: [RouterLink],
  selector: 'app-gallery',
  styleUrl: './gallery.scss',
  templateUrl: './gallery.html',
})
export class Gallery {
  artworks: Artwork[] = ARTWORKS;
  private readonly preloadedImages = new Map<string, HTMLImageElement>();
  private readonly meta = inject(Meta);

  constructor() {
    this.meta.updateTag({
      name: 'description',
      content: 'Explore original paintings by contemporary artist Olga Ovchinnikova. Discover her artistic vision and selected artworks.'
    });
  }

  preloadArtwork(src: string): void {
    if (typeof Image === 'undefined' || this.preloadedImages.has(src)) {
      return;
    }

    const image = new Image();
    image.src = src;

    this.preloadedImages.set(src, image);
  }
}
