// Shared, language-independent site data. Interface copy lives in src/i18n.ts.
export const site = {
  name: 'Miguel Ángel Mengs',
  email: 'm.mengsarevalo@gmail.com',
  linkedin: '', // e.g. https://www.linkedin.com/in/your-handle
  // social links shown top right on every screen; an empty url shows the icon without a link
  social: [
    { key: 'instagram', label: 'Instagram', url: '' },
    { key: 'behance', label: 'Behance', url: '' },
    { key: 'linkedin', label: 'LinkedIn', url: '' },
    { key: 'soundcloud', label: 'SoundCloud', url: '' },
  ],
  collageDark: '/collage-dark.jpg', // hero collage for dark mode, e.g. '/collage-dark.jpg'; empty = darkened light collage
  portrait: '/portrait.webp', // About photo
  photo: '', // (collage branch: the collage lives in the hero) // full-width photo between "How I work" and "Experience", e.g. '/me.jpg' in public/
};
