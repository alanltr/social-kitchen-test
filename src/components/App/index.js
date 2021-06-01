// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import Posts from 'src/containers/Posts';
import NavTabs from 'src/containers/NavTabs';
import AddPost from 'src/components/Elements/AddPost';

// == Import
import './styles.scss';

// == Composant
const App = ({ logIn }) => {
  React.useEffect(() => {
    logIn();
  });

  return (
    <div className="app">
      <AddPost />
      <NavTabs />
      <Posts />
    </div>
  );
};

App.propTypes = {
  logIn: PropTypes.func.isRequired,
};
// == Export
export default App;
