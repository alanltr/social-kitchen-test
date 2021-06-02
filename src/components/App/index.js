// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import logo from 'src/assets/logo.png';

import Posts from 'src/containers/Posts';
import NavTabs from 'src/containers/NavTabs';
import AddPost from 'src/containers/AddPost';
import AddModal from 'src/containers/AddModal';
import Loader from 'src/components/Elements/Loader';


// == Import
import './styles.scss';

// == Composant
const App = ({ logIn, isLoadingApp }) => {
  React.useEffect(() => {
    logIn();
  });

  return (
    <div className="app">
      {isLoadingApp && <Loader />}
      {!isLoadingApp && (
        <>
          <div className="logo-container">
            <img src={logo} alt="logo Social Kitchen" />
          </div>
          <AddPost />
          <NavTabs />
          <Posts />
          <AddModal />
        </>
      )}
    </div>
  );
};

App.propTypes = {
  logIn: PropTypes.func.isRequired,
  isLoadingApp: PropTypes.bool.isRequired,
};

// == Export
export default App;
