import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import LocaleSelector from './LocaleSelector';
import NavLinks, { NavLink, SectionHead as NavSectionHead } from './NavLinks';

const drawerWidth = 240;

const Main = styled('main')(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minHeight: '100vh',
    padding: theme.spacing(4),
  };
});

type NavItemTypes = NavLink | NavSectionHead;

const NavItem: React.FC<{ item: NavItemTypes }> = ({ item }) => {
  if ((item as NavSectionHead).title) {
    const { title } = item as NavSectionHead;
    return (
      <>
        <Divider sx={{ paddingTop: 1, marginBottom: 1 }} />
        <ListSubheader sx={{ pointerEvents: 'none' }}>{title}</ListSubheader>
      </>
    );
  }

  const { route, text } = item as NavLink;

  return (
    <Link href={route} passHref={true}>
      <ListItem button>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  );
};

const ListItems = () => {
  return (
    <>
      {NavLinks.map((item: NavItemTypes, index) => (
        <NavItem item={item} key={index} />
      ))}
    </>
  );
};

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
        <Divider />
        <List>
          <ListItems />
        </List>
      </Drawer>
      <Main id="main">{children}</Main>
    </Box>
  );
};

export default DrawerLayout;
