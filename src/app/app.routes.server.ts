import {PrerenderFallback, RenderMode, ServerRoute,} from '@angular/ssr';
import {ARTWORKS} from './data/artworks.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'artworks/:slug',
    renderMode: RenderMode.Prerender,

    async getPrerenderParams() {
      return ARTWORKS.map(artwork => ({
        slug: artwork.slug,
      }));
    },

    fallback: PrerenderFallback.None,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
