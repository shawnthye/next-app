import { UrlObject } from 'url';

export type SectionHead = {
  title: string;
};

export type NavLink = {
  text: String;
  route: string | UrlObject;
  //   icon: SvgIconComponent;
};

const NavLinks: (NavLink | SectionHead)[] = [
  {
    text: 'Home',
    route: '/',
    // icon: InboxOutlined,
  },
  {
    title: 'Deep links',
  },
  {
    text: 'Categories',
    route: '/deep-links/categories',
  },
];

export default NavLinks;
