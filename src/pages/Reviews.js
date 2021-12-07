import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Divider, Button, Box } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Review from '../components/Review';
import people from '../utils/reviewsData';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100vw',
    height: '98vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: '10%',
    height: 5,
    marginBottom: 50,
    borderRadius: 5,
    backgroundColor: theme.palette.success.light,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  card: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: '50%',
    width: '50%',
    padding: '0 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 35,
  },
  button: {
    margin: 0,
    padding: 0,
  },
  random: {
    margin: 5,
    backgroundColor: theme.palette.success.light,
    textTransform: 'initial',
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    },
  },
}));

const Reviews = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const person = people[index];

  const checkIndex = (index) => {
    if (index > people.length - 1) {
      return 0;
    }
    if (index < 0) {
      return people.length - 1;
    }
    return index;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const previousPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const randomIndex = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === index) {
      random = index + 1;
    }
    setIndex(checkIndex(random));
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h3" component="h1">
        Our Reviews
      </Typography>
      <Divider variant="middle" className={classes.divider} />
      <Box className={classes.card}>
        <Review {...person} />
        <Box>
          <Button className={classes.button}>
            <ChevronLeftIcon
              className={classes.icon}
              onClick={previousPerson}
            />
          </Button>
          <Button className={classes.button} onClick={nextPerson}>
            <ChevronRightIcon className={classes.icon} />
          </Button>
        </Box>
        <Button className={classes.random} onClick={randomIndex}>
          Surprise Me
        </Button>
      </Box>
    </Container>
  );
};

export default Reviews;
