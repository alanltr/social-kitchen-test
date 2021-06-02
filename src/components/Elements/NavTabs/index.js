// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PublishIcon from '@material-ui/icons/Publish';

// == Import
import './navtabs.scss';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

// == Composant
const NavTabs = ({ setCategoryToDisplay }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = ((e) => {
    setCategoryToDisplay(e.currentTarget.name);
  });

  return (
    <div className="navtabs-component">
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="choix du type de publication"
          centered
        >
          <Tab onClick={handleClick} name="pending" icon={<ScheduleIcon />} aria-label="en attente" />
          <Tab onClick={handleClick} name="validate" icon={<CheckCircleOutlineIcon />} aria-label="validées" />
          <Tab onClick={handleClick} name="published" icon={<PublishIcon />} aria-label="publiées" />
        </Tabs>
      </Paper>
    </div>
  );
};

NavTabs.propTypes = {
  setCategoryToDisplay: PropTypes.func.isRequired,
};

// == Export
export default NavTabs;
