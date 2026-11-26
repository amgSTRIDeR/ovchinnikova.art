import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  imports: [
    RouterLink,
    RouterLinkActive,
    Footer
  ],
  selector: 'app-sidebar',
  styleUrl: './sidebar.scss',
  templateUrl: './sidebar.html',
})
export class Sidebar {}
