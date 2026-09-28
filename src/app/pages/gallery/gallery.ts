import {Component} from '@angular/core';
import {Artwork, ARTWORKS} from '../../data/artworks.data';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  imports: [NgOptimizedImage, RouterLink],
  selector: 'app-gallery',
  styleUrl: './gallery.scss',
  templateUrl: './gallery.html',
})
export class Gallery {
  artworks: Artwork[] = ARTWORKS;
}
