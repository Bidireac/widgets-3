import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Container,
  Divider,
  FilledInput,
  Paper,
  Typography,
} from '@material-ui/core';
import AlertMessage from '../components/AlertMessage';
import GroceryList from '../components/GroceryList';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 100,
    width: '100%',
    height: '85vh',
  },
  paper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
  },
  title: {
    marginTop: 15,
  },
  divider: {
    backgroundColor: theme.palette.secondary.light,
    height: 4,
    marginBottom: 20,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: 700,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    borderRadius: 0,
  },
  button: {
    height: '100%',
    width: '30%',
    borderRadius: 0,
    backgroundColor: theme.palette.secondary.light,
  },
  listItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Grocery = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, severity: '', msg: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'error', 'Please enter a value!');
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'Value changed!');
    } else {
      showAlert(true, 'success', 'Item added to the list!');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  const showAlert = (show = false, severity = '', msg = '') => {
    setAlert({ show, severity, msg });
  };
  const clearList = () => {
    showAlert(true, 'error', 'Empty list!');
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, 'error', 'Item removed!');
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  return (
    <Container className={classes.container}>
      <Paper elevation={3} variant="outlined" className={classes.paper}>
        <form onSubmit={handleSubmit} className={classes.form}>
          {alert.show && (
            <AlertMessage {...alert} removeAlert={showAlert} list={list} />
          )}
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className={classes.title}
          >
            Grocery List
            <Divider variant="middle" className={classes.divider} />
          </Typography>
          <Box className={classes.inputContainer}>
            <FilledInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={classes.input}
            />
            <Button type="submit" className={classes.button}>
              {isEditing ? 'Edit' : 'Submit'}
            </Button>
          </Box>
        </form>
        {list.length > 0 && (
          <Box className={classes.listItems}>
            <GroceryList
              items={list}
              removeItem={removeItem}
              editItem={editItem}
            />
            <Button
              onClick={clearList}
              size="large"
              variant="outlined"
              color="secondary"
            >
              Clear Items
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Grocery;
