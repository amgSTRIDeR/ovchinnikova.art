export type PrivacyLanguage = 'en' | 'es';

export const PRIVACY_TRANSLATIONS = {
  en: {
    title: 'Privacy Policy',
    sections: [
      {
        title: 'Personal data',
        text: 'This website is an artist portfolio. It does not require user registration and does not use analytics, advertising trackers or tracking cookies.'
      },
      {
        title: 'Hosting',
        text: 'This website is hosted on GitHub Pages. GitHub records and stores visitors’ IP addresses for security purposes.',
        link: {
          label: 'GitHub General Privacy Statement',
          url: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement'
        }
      },
      {
        title: 'External services',
        text: 'This website contains links to third-party services. These services are governed by their own privacy policies.'
      },
      {
        title: 'Contact',
        text: 'Personal information voluntarily provided when contacting the artist is used to respond to inquiries and manage related correspondence.'
      },
      {
        title: 'Your rights',
        text: 'You may request access, rectification, updating or deletion of your personal data by contacting the artist, in accordance with applicable law.',
        link: {
          label: 'Uruguayan Data Protection Authority (URCDP)',
          url: 'https://www.gub.uy/unidad-reguladora-control-datos-personales/'
        }
      }
    ]
  },
  es: {
    title: 'Política de privacidad',
    sections: [
      {
        title: 'Datos personales',
        text: 'Este sitio web es un portafolio artístico. No requiere el registro de usuarios ni utiliza herramientas de análisis, rastreadores publicitarios o cookies de seguimiento.'
      },
      {
        title: 'Alojamiento web',
        text: 'Este sitio web está alojado en GitHub Pages. GitHub registra y almacena las direcciones IP de los visitantes por motivos de seguridad.',
        link: {
          label: 'Declaración general de privacidad de GitHub',
          url: 'https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement'
        }
      },
      {
        title: 'Servicios externos',
        text: 'Este sitio web contiene enlaces a servicios de terceros. Estos servicios se rigen por sus propias políticas de privacidad.'
      },
      {
        title: 'Contacto',
        text: 'Los datos personales proporcionados voluntariamente al contactar con la artista se utilizan para responder a consultas y gestionar la correspondencia relacionada.'
      },
      {
        title: 'Sus derechos',
        text: 'Puede solicitar el acceso, la rectificación, la actualización o la supresión de sus datos personales contactando con la artista, de conformidad con la legislación aplicable.',
        link: {
          label: 'Unidad Reguladora y de Control de Datos Personales (URCDP)',
          url: 'https://www.gub.uy/unidad-reguladora-control-datos-personales/'
        }
      }
    ]
  }
};