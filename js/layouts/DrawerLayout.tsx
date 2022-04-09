import { InboxOutlined, InboxRounded } from '@mui/icons-material';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
// import Link from '../@core/elements/Link';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';
import NavLinks from './NavLinks';
import LocaleSelector from './LocaleSelector';

const drawerWidth = 240;

const DrawerLayout: React.FC<ReactComponentProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left">
        <LocaleSelector />
        <List>
          {NavLinks.map(({ text, route }, index) => (
            <Link href={route} passHref={true} key={index}>
              <ListItem button>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      {children}
    </Box>
  );
};

export default DrawerLayout;
