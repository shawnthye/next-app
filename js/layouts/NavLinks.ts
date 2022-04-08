import { InboxOutlined, SvgIconComponent } from '@mui/icons-material';
import { UrlObject } from 'url';

export type NavLink = {
  text: String;
  route: string | UrlObject;
  //   icon: SvgIconComponent;
};

const NavLinks: NavLink[] = [
  {
    text: 'Home',
    route: '/',
    // icon: InboxOutlined,
  },
  {
    text: 'Hello',
    route: '/hello1',
  },
];

export default NavLinks;
