import React from 'react';
import { Box, Chip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    height: '100vh',
  },
  duties: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    margin: '0 10px',
  },
}));

const TabPanel = ({ value, index, company, dates, duties, title }) => {
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
          <Chip label={company} />
          <Typography variant="overline" display="block" gutterBottom>
            {dates}
          </Typography>
          {duties.map((duty, index) => {
            return (
              <Box key={index} className={classes.duties}>
                <DoubleArrowIcon className={classes.icon} />
                <Typography component="span">{duty}</Typography>
              </Box>
            );
          })}
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
