import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const useStyles = makeStyles((theme) => ({
  avatar: {
    position: 'absolute',
    width: 200,
    height: 200,
    zIndex: 2,
  },
  avatarShadow: {
    width: 200,
    height: 200,
    top: '-5px',
    right: '-5px',
    backgroundColor: theme.palette.success.light,
  },
  shadow: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quote: {
    position: 'absolute',
    zIndex: 3,
    top: 5,
    left: 5,
    backgroundColor: theme.palette.success.light,
    borderRadius: '50%',
    fontSize: 45,
  },
  name: {
    textTransform: 'capitalize',
    color: theme.palette.text.primary,
  },
  job: {
    textTransform: 'uppercase',
    color: theme.palette.text.primary,
  },
  text: {
    textAlign: 'center',
    margin: 10,
  },
}));

const Review = ({ name, job, image, text }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.shadow}>
        <Avatar alt={name} src={image} className={classes.avatar} />
        <Avatar className={classes.avatarShadow} />
        <FormatQuoteIcon className={classes.quote} />
      </Box>
      <Typography variant="h6" component="h6" className={classes.name}>
        {name}
      </Typography>
      <Typography variant="subtitle1" component="h6" className={classes.job}>
        {job}
      </Typography>
      <Typography variant="body1" component="p" className={classes.text}>
        {text}
      </Typography>
    </>
  );
};

export default Review;
