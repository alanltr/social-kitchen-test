// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import Posts from 'src/containers/Posts';

// == Import
import './styles.scss';

// == Composant
const App = ({ logIn }) => {
  React.useEffect(() => {
    logIn();
  });

  return (
    <div className="app">
      <Posts />
    </div>
  );
};

App.propTypes = {
  logIn: PropTypes.func.isRequired,
};
// == Export
export default App;
