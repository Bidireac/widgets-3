import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: 15,
  },
}));

const Categories = ({ categories, filterItems }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {categories.map((category, index) => (
        <Button size="large" key={index} onClick={() => filterItems(category)}>
          {category}
        </Button>
      ))}
    </Container>
  );
};

export default Categories;
