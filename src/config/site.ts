export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: 'Gjøvik Kristelige Studentlag',
  title: 'Studentlaget Gjøvik',
  description:
    'Studentlaget Gjøvik er et studentlag som arbeider for å fremme studentlivet og gi studenter en god opplevelse under studietiden.',
  siteUrl: 'https://student.lagetgjovik.no',
  language: 'no',
  locale: 'en_US',
  dateLocale: 'en-US',
  socialImage: '/og-image.png',

  author: {
    name: 'Trond Smith-Øvland',
    role: 'Design engineer',
    location: 'Gjøvik, Norway',
    email: 'hello@example.com',
  },

  /** The pill above the homepage headline. Set `enabled: false` to remove it. */
  availability: {
    enabled: false,
    label: 'Available for new projects from January 2027',
  },

  /** The button at the end of the header and in the mobile menu. */
  action: { label: 'Bli medlem', href: 'https://laget.nkss.no/' },

  /** A PDF in `public/`, offered on the resume page. Leave empty to hide the button. */
  resumePdf: '',

  /** The banner and preferences dialog. Set `enabled: false` to remove both. */
  cookieConsent: {
    enabled: false,
  },

  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Dribbble', href: 'https://dribbble.com/' },
    { label: 'Behance', href: 'https://www.behance.net/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
  ] satisfies NavLink[],
};

export const navigation: NavLink[] = [
  { label: 'Work', href: '/work/' },
  { label: 'Om oss', href: '/om-oss/' },
  { label: 'Resume', href: '/resume/' },
];

export const legalLinks: NavLink[] = [
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Terms', href: '/terms/' },
];
