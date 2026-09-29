export interface Artwork {
  slug: string;
  title: string;
  year: string;
  meta: string;
  image: string;
  alt: string;
  description: string[];
}

export const ARTWORKS: Artwork[] = [
  {
    slug: 'hold-on',
    title: 'Hold On',
    year: '2026',
    meta: 'Oil on canvas · 100 × 80 cm',
    image: '/images/hold-on.webp',
    alt: 'Hold On, 2026, oil painting by Olga Ovchinnikova',
    description: [
      'Everything around her has already been destroyed: the city is burning, buildings lie in ruins, and the tripods are advancing. It seems like exactly the right moment to do something. But the heroine is not ready yet. She needs five minutes, hold on please.',

      'The heroine retains the ability to remain steady at a moment when the external world is rapidly losing its familiar shape. She is not trying to stop the catastrophe, but she also does not allow it to completely take over her state of mind. By continuing her familiar self-care ritual, she maintains control over what is still available to her. This contrast between an everyday gesture and the scale of destruction creates a space between denial, composure, and adaptation.',

      'Everyone has their own mechanism of survival. When familiar reality disappears, even the most insignificant ritual can become a form of support.',

      'The thin pink cord connecting the heroine to her familiar environment becomes the last thread of a fragile connection to something known. It can be read both as a denial of what is happening and as an attempt to accept the new reality enough to be able to continue living within it. Hold On brings together humour, anxiety, and visual appeal, turning an absurd scene into a reflection on resilience, adaptation, and the ability to keep moving even when it seems that everything is already lost. Sometimes the world collapses faster than we can prepare ourselves for it. But morning still comes. And sometimes the only thing left is to hold on.',
    ],
  },

  {
    slug: 'they-like-you',
    title: 'They Like You',
    year: '2026',
    meta: 'Oil on canvas · 100 × 100 cm',
    image: '/images/they-like-you.webp',
    alt: 'They Like You, 2026, oil painting by Olga Ovchinnikova',
    description: [
      'They’re looking at you. All of them at once. You wanted to be liked, to be accepted — but it turns out that dealing with people’s reactions, or the lack of them, isn’t easy at all.',

      'Barbie is literally at the centre of attention. She doesn’t run away or try to make them stop looking. As everything around her gets hotter, she simply stays in that space. What else is there to do?',

      'They Like You is about the strange feeling of wanting others to like you while knowing they don’t accept you. What happens when you finally get the attention you wanted — do you turn away from it because you’re not ready for it?',
    ],
  },

  {
    slug: 'calm-down',
    title: 'Calm Down',
    year: '2026',
    meta: 'Oil on canvas · 78.5 × 98.125 cm',
    image: '/images/calm-down.webp',
    alt: 'Calm Down, 2026, oil painting by Olga Ovchinnikova',
    description: [
      'At first, you think it won’t happen. And then you find yourself looking for somewhere to put your foot so you don’t fall.',

      'There’s no solid ground anymore. All that’s left is a melting piece of ice, with piranhas underneath.',

      'Barbie can’t fix the situation or bring the shore back. Maybe a helicopter will come. Or a boat will arrive. For now, all she can do is keep her balance on whatever is still holding her up.',

      'But what if some of those dangers are drawn by your own mind, and your only task is to stay standing until you make it to shore?',

      'This work is about the moment when the support you relied on disappears and you have to find another. What keeps you standing when there’s nothing solid beneath your feet anymore?',
    ],
  },
   {
    slug: 'overthinking',
    title: 'Overthinking',
    year: '2026',
    meta: 'Oil on canvas · 78.5 × 98.125 cm',
    image: '/images/Overthinking.webp',
    alt: 'Overthinking, 2026, oil painting by Olga Ovchinnikova',
    description: [
    ],
  },
];

export function getArtwork(slug: string): Artwork | undefined {
  return ARTWORKS.find(artwork => artwork.slug === slug);
}
