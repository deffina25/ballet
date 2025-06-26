import type { TFunction } from 'i18next';

export const menuTopList = (t: TFunction) => [
  {
    id: 1,
    name: t('menu.m0'),
    href: '/',
  },
  {
    id: 2,
    name: t('menu.m1'),
    children: [
      {
        id: '2-1',
        name: 'n’ERA',
        href: '/about/about-nera',
      },
      {
        id: '2-2',
        name: 'Vladislav & Veronika',
        href: '/about/vladislav-veronika',
      },
    ],
  },
  {
    id: 3,
    name: t('menu.m2'),
    href: '/productions',
  },
  {
    id: 4,
    name: t('menu.m3'),
    href: '/events',
  },
  {
    id: 5,
    name: t('menu.m4'),
    href: '/news',
  },
  {
    id: 6,
    name: t('menu.m5'),
    href: '/contact',
  },
];
