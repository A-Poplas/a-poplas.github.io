import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const socialIconsData = {
  socialLinks: [
    { text: 'Mail', ariaLabel: 'Mail', icon: 'tabler:mail', href: 'mailto:andi.poplas@gmail.com' },
    { text: 'LinkedIn', ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/andy-poplas/', target:"_blank"},
    /*{ ariaLabel: 'ArtStation', icon: 'tabler:brand-artstation', href: '#' },*/
    /*{ ariaLabel: 'Soundcloud', icon: 'tabler:brand-soundcloud', href: '#' },*/
    { text: 'Behance', ariaLabel: 'Behance', icon: 'tabler:brand-behance', href: 'https://www.behance.net/andypoplas', target:"_blank"},
    { text: 'Instagram', ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/y_poplas/', target:"_blank"},
    //{ text: 'GitHub', ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/A-Poplas', target:"_blank"},
  ]
}

export const headerData = {
  links: [
    {
      text: 'GFX',
      href: getPermalink('category/graphic-design'),
    },
    {
      text: 'UI/UX',
      href: getPermalink('category/ui-ux'),
    },
    /*{
      text: 'Other',
      links: [
        {
          text: '3D',
          href: getPermalink('/#features'),
        },
      ],
    },*/
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
    Made with <a class="text-primary hover:underline dark:text-gray-200" href="https://astro.build/">Astro</a> and <a class="text-primary hover:underline dark:text-gray-200" href="https://github.com/onwidget/astrowind">AstroWind</a> template · All rights reserved.
  `,
};

/* Icons: 
  https://icon-sets.iconify.design/tabler/
  */
