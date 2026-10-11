import {Component} from '@angular/core';
import {Artwork, ARTWORKS} from '../../data/artworks.data';
import {RouterLink} from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-gallery',
  styleUrl: './gallery.scss',
  templateUrl: './gallery.html',
})
export class Gallery {
  artworks: Artwork[] = ARTWORKS;
  private readonly preloadedImages = new Map<string, HTMLImageElement>();

  preloadArtwork(src: string): void {
    if (typeof Image === 'undefined' || this.preloadedImages.has(src)) {
      return;
    }

    const image = new Image();
    image.src = src;

    this.preloadedImages.set(src, image);
  }
}
