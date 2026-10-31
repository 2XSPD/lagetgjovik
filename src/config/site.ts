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
  locale: 'nb_NO',
  dateLocale: 'nb_NO',
  socialImage: '/og-image.png',

  org: {
    location: 'Gjøvik, Norway',
    email: 'kr.lagetntnugjovik@gmail.com',
    orgnr: '935750431',
  },

  /** The button at the end of the header and in the mobile menu. */
  action: { label: 'Bli medlem', href: 'https://laget.nkss.no/' },

  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/studentlaget_gjovik' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100067791260288' },
    { label: 'Discord', href: 'https://discord.gg/DDuuPDVQyD' },
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
