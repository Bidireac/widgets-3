import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Tabs,
  Tab,
  Divider,
  Typography,
  Box,
} from '@material-ui/core';
import Loading from '../components/Loading';
import TabPanel from '../components/TabPanel';

const url = 'https://course-api.com/react-tabs-project';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '85vw',
    height: '80vh',
  },
  tabs: {
    width: '15vw',
  },
  divider: {
    backgroundColor: theme.palette.secondary.light,
    height: 4,
  },
  tabContainer: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
  },
}));

const TabsPage = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setJobs(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (loading) return <Loading />;

  return (
    <Container className={classes.container}>
      <Typography gutterBottom variant="h2" component="h2">
        Experience
        <Divider variant="middle" className={classes.divider} />
      </Typography>
      <Box className={classes.tabContainer}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          className={classes.tabs}
        >
          {jobs.map((item) => (
            <Tab key={item.id} label={item.company} />
          ))}
        </Tabs>
        {jobs.map((job, index) => {
          return <TabPanel key={job.id} value={value} index={index} {...job} />;
        })}
      </Box>
    </Container>
  );
};

export default TabsPage;
