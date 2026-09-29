import { Routes } from '@angular/router';

export const routes: Routes = [
  // Without sidebar
  {
    path: 'artworks/:slug',
    loadComponent: () =>
      import('./pages/artwork/artwork').then(m => m.ArtworkPage),
  },

  // With sidebar
  {
    path: '',
    loadComponent: () =>
      import('./layouts/site-layout/site-layout').then(m => m.SiteLayout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/gallery/gallery').then(m => m.Gallery),
        title: 'Olga Ovchinnikova - Contemporary Artist',
      },
      {
        path: 'bio',
        loadComponent: () =>
          import('./pages/bio/bio').then(m => m.Bio),
        title: 'Bio — Olga Ovchinnikova',
      },
      {
        path: 'statement',
        loadComponent: () =>
          import('./pages/statement/statement').then(m => m.Statement),
        title: 'Artist Statement — Olga Ovchinnikova',
      },
      {
        path: 'cv',
        loadComponent: () =>
          import('./pages/cv/cv').then(m => m.Cv),
        title: 'CV — Olga Ovchinnikova',
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact').then(m => m.Contact),
        title: 'Contact — Olga Ovchinnikova',
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];
