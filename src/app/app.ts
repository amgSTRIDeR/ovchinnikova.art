import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Sidebar} from './components/sidebar/sidebar';
import {SiteLayout} from './layouts/site-layout/site-layout';


@Component({
  imports: [RouterOutlet, Sidebar, SiteLayout],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ovchinnikova.art');
}
