import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  ButtonBase,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95vw',
    gridTemplateColumns: '1fr 1fr',
    margin: '0 auto',
    maxWidth: '1170px',
    display: 'grid',
    gap: '3rem 2rem',
    justifyItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  divider: {
    width: '100%',
    backgroundColor: theme.palette.secondary.light,
    height: 1,
    marginBottom: 10,
  },
}));

const MenuItems = ({ items }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <Paper key={id} className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt={title} src={img} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {title}
                    </Typography>
                    <Divider variant="middle" className={classes.divider} />
                    <Typography variant="body2" gutterBottom>
                      {desc}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">${price}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </div>
  );
};

export default MenuItems;
