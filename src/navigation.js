import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const socialIconsData = {
  socialLinks: [
    { text: 'Mail', ariaLabel: 'Mail', icon: 'tabler:mail', href: 'mailto:andi.poplas@gmail.com' },
    { text: 'LinkedIn', ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/andy-poplas/', target:"_blank"},
    /*{ ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },*/
    /*{ ariaLabel: 'Soundcloud', icon: 'tabler:brand-soundcloud', href: '#' },*/
    { text: 'Behance', ariaLabel: 'Behance', icon: 'tabler:brand-behance', href: '#test123', target:"_blank"},
    { text: 'Instagram', ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#', target:"_blank"},
    { text: 'GitHub', ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/A-Poplas', target:"_blank"},
  ]
}

export const headerData = {
  links: [
    {
      text: 'GFX',
      href: getPermalink('category/gfx'),
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
          href: getPermalink('/#features'),
        },
      ],
    },
  ],
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
  footNote: `
    Made with <a class="text-primary hover:underline dark:text-gray-200" href="https://astro.build/">Astro</a> and <a class="text-primary hover:underline dark:text-gray-200" href="https://github.com/onwidget/astrowind">AstroWind</a> template · All rights reserved.
  `,
};

/* Icons: 
  https://icon-sets.iconify.design/tabler/
  */
