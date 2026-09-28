import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {Sidebar} from "../../components/sidebar/sidebar";

@Component({
    imports: [
        RouterOutlet,
        Sidebar
    ],
  selector: 'app-site-layouts',
  styleUrl: './site-layout.scss',
  templateUrl: './site-layout.html',
})
export class SiteLayout {}
