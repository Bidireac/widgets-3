import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import items from '../utils/menuData';
import MenuItems from '../components/MenuItems';
import Categories from '../components/Categories';
import { Container, Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    width: '98vw',
    height: '98vh',
  },
  divider: {
    backgroundColor: theme.palette.secondary.light,
    height: 4,
  },
}));

const MenuPage = () => {
  const allCategories = ['all', ...new Set(items.map((item) => item.category))];
  const classes = useStyles();
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h2" component="h2" gutterBottom>
        Our Menu
        <Divider variant="middle" className={classes.divider} />
      </Typography>
      <Categories filterItems={filterItems} categories={categories} />
      <MenuItems items={menuItems} />
    </Container>
  );
};

export default MenuPage;
