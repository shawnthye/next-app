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
    title: 'Demos',
  },
  {
    text: 'Theme',
    route: '/theme',
  },
];

export default NavLinks;
