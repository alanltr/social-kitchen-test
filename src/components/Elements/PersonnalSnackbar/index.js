// == Import npm
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

// == Import
import './personalSnackbar.scss';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// == Composant
const PersonalSnackbar = ({
  isASuccess,
  successMessage,
  isOpenSnackbar,
  toggleIsOpenSnackbar,

}) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    toggleIsOpenSnackbar(false);
  };

  // Ternaire : en fonction de la props isASuccess on determine
  // la couleur et l'apparence de la notif
  return (
    <div className="snackbar-component">
      <Snackbar
        open={isOpenSnackbar}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {isASuccess ? (
          <Alert onClose={handleClose} severity="success">
            {successMessage}
          </Alert>
        )
          : (
            <Alert onClose={handleClose} severity="error">
              {successMessage}
            </Alert>
          )}
      </Snackbar>
    </div>
  );
};

PersonalSnackbar.propTypes = {
  isASuccess: PropTypes.bool.isRequired,
  successMessage: PropTypes.string.isRequired,
  isOpenSnackbar: PropTypes.bool.isRequired,
  toggleIsOpenSnackbar: PropTypes.func.isRequired,
};

// == Export
export default PersonalSnackbar;
