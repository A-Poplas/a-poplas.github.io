import { getPermalink } from './utils/permalinks';

export const socialIconsData = {
  socialLinks: [
    { text: 'Mail', ariaLabel: 'Mail', icon: 'solar:letter-outline', href: 'mailto:andi.poplas@gmail.com' },
    { text: 'LinkedIn', ariaLabel: 'LinkedIn', icon: 'ph:linkedin-logo', href: 'https://www.linkedin.com/in/andy-poplas/', target:"_blank"},
    /*{ text: 'SoundCloud', ariaLabel: 'Soundcloud', icon: 'tabler:brand-soundcloud', href: '#' },*/
    //{ text: 'Behance', ariaLabel: 'Behance', icon: 'tabler:brand-behance', href: 'https://www.behance.net/andypoplas', target:"_blank"},
    { text: 'Instagram', ariaLabel: 'Instagram', icon: 'ph:instagram-logo', href: 'https://www.instagram.com/y_poplas/', target:"_blank"},
    //{ text: 'ArtStation', ariaLabel: 'ArtStation', icon:'tabler:link', href: 'https://www.artstation.com/andy_p', target:"_blank" },
    //{ ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@a_poplas' },
    //{ text: 'GitHub', ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/A-Poplas', target:"_blank"},
  ]
}

export const headerData = {
  links: [
    {
      text: 'Work',
      href: getPermalink('work'),
    },
    {
      text: 'About',
      href: getPermalink('about'),
    },
    /*{
      text: 'GFX',
      href: getPermalink('category/graphic-design'),
    },
    {
      text: 'UI/UX',
      href: getPermalink('category/ui-ux'),
    },
    {
      text: 'Other',
      links: [
        {
          text: '3D',
          href: getPermalink('category/3d'),
        },
        {
          text: 'Game Dev',
          href: getPermalink('category/game-dev'),
        },
      ],
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'CV', href: getPermalink('/cv') },
    { text: 'Contact', href: getPermalink('/contact') },
    /*{ text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },*/
  ],
  footNote: `
    All rights reserved © 2024.
  `,
};