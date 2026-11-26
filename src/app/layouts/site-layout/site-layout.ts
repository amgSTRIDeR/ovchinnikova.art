import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {Sidebar} from "../../components/sidebar/sidebar";
import { Footer } from '../../components/footer/footer';

@Component({
    imports: [
        RouterOutlet,
        Sidebar,
        Footer
    ],
  selector: 'app-site-layouts',
  styleUrl: './site-layout.scss',
  templateUrl: './site-layout.html',
})
export class SiteLayout {}
