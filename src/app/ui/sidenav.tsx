import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './nav-links';
import NavLinks1 from './joshua/organism/NavLinks';

const drawerWidth = 600;

export default function SideNav() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: '#3F4D67',
          color: '#9FB3D0',
          height: '100vh',
          overflowX: 'hidden',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar sx={{ paddingY: '20px' }}>
        <Link href={'/'}>
          <Image src={'/logo.png'} width={200} height={40} alt="LOGO"></Image>
        </Link>
      </Toolbar>
      <div style={{ display: 'flex' }}>
        <List>
          <NavLinks />
        </List>
        <List>
          <NavLinks1 />
        </List>
      </div>
    </Drawer>
  );
}
