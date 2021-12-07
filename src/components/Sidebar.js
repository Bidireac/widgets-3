import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { links, social } from '../utils/linksData';
import { NavLink } from 'react-router-dom';
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';

const useStyles = makeStyles((theme) => ({
  box: {
    width: 500,
    height: '100%',
    backgroundColor: theme.palette.success.light,
  },
  link: {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    textTransform: 'capitalize',
    '&:hover': {
      color: theme.palette.secondary.dark,
    },
  },
  list: {
    marginTop: 20,
    marginBottom: 10,
  },
  social: {
    display: 'flex',
    marginTop: 10,
  },
  icon: {
    color: theme.palette.text.primary,
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <List className={classes.list}>
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <ListItem key={id} button>
              <NavLink to={url} className={classes.link}>
                <KeyboardTabIcon />
                <ListItemText primary={text} className={classes.text} />
              </NavLink>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List className={classes.social}>
        {social.map((item) => {
          const { id, url, icon, text } = item;
          return (
            <ListItem key={id} button>
              <NavLink to={url} className={classes.link}>
                <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;
