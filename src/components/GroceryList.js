import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 700,
    height: '100%',
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
  },
  listItem: {
    width: '100%',
    height: 60,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 10px',
  },
  edit: {
    color: theme.palette.success.light,
  },
  delete: {
    color: theme.palette.error.light,
  },
}));

const GroceryList = ({ items, removeItem, editItem }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <Box key={id} className={classes.listItem}>
            <Typography variant="h6" component="p" gutterBottom>
              {title}
            </Typography>
            <Box>
              <Button className={classes.edit} onClick={() => editItem(id)}>
                <EditIcon />
              </Button>
              <Button className={classes.delete} onClick={() => removeItem(id)}>
                <DeleteForeverIcon />
              </Button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default GroceryList;
