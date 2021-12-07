import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    margin: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const AlertMessage = ({ msg, severity, removeAlert, list }) => {
  const classes = useStyles();
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <div className={classes.container}>
      <Alert variant="filled" severity={severity}>
        {msg}
      </Alert>
    </div>
  );
};

export default AlertMessage;
