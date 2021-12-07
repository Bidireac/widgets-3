import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Box, Button, Typography } from '@material-ui/core';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '98vw',
    height: '98vh',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 600,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: theme.palette.success.light,
  },
}));

const ModalPage = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.container}>
      <Button
        type="button"
        variant="contained"
        size="large"
        onClick={handleOpen}
        className={classes.button}
        startIcon={<OpenInBrowserIcon />}
      >
        Show Modal
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.paper}>
            <Typography
              gutterBottom
              id="transition-modal-title"
              variant="h2"
              component="h2"
            >
              Transition modal
            </Typography>
            <Typography
              id="transition-modal-description"
              variant="h6"
              component="p"
            >
              Modal Content goes here.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ModalPage;
