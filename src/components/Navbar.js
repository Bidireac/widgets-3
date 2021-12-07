import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Drawer } from '@material-ui/core';
import Sidebar from './Sidebar';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  appbar: {
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
  },
  menu: {
    color: theme.palette.secondary.light,
    cursor: 'pointer',
    fontSize: 40,
    margin: '0 10px',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [openNav, setOpenNav] = useState(false);

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Button onClick={() => setOpenNav(true)}>
        <MenuIcon className={classes.menu} />
      </Button>
      <Drawer anchor="left" open={openNav} onClose={() => setOpenNav(false)}>
        <Sidebar />
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
