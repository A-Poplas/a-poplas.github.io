import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'GFX',
      href: '#',
    },
    {
      text: 'UI/UX',
      href: '#',
    },
    {
      text: 'Other',
      links: [
        {
          text: '3D',
          href: getPermalink('/#features'),
        },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'Mail', icon: 'tabler:mail', href: 'mailto:andi.poplas@gmail.com' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Behance', icon: 'tabler:brand-behance', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/A-Poplas' },
  ]
  //actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'CV', href: getPermalink('/cv') },
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Mail', icon: 'tabler:mail', href: 'mailto:andi.poplas@gmail.com' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Behance', icon: 'tabler:brand-behance', href: '#' },
    /*{ ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },*/
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    /*{ ariaLabel: 'Soundcloud', icon: 'tabler:brand-soundcloud', href: '#' },*/
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/A-Poplas' },
  ],
  footNote: `
    Made with <a class="text-blue-600 hover:underline dark:text-gray-200" href="#">Astro</a> and <a class="text-blue-600 hover:underline dark:text-gray-200" href="#">AstroWind</a> template · All rights reserved.
  `,
};

/* Icons: 
  https://icon-sets.iconify.design/tabler/
  */
