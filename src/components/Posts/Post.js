// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import moment from 'moment';

// == Composant
const Post = ({
  caption,
  publishAt,
  image,
  status,
  ID,
  updatePostStatus,
}) => (
  <div className="post-container">
    <div className="post-image">
      <img src={image} alt="" />
    </div>
    <div className="post-content">
      {status === 'pending' && (
        <div className="middle-div">
          <div className="button-div">
            <IconButton
              name={ID}
              value="validate"
              onClick={updatePostStatus}
              aria-label="validation"
            >
              <CheckIcon className="valid" />
            </IconButton>
            <IconButton
              name={ID}
              value="refused"
              onClick={updatePostStatus}
              aria-label="refus"
            >
              <ClearIcon className="refuse" />
            </IconButton>
          </div>
          <div className="description">
            {caption}
          </div>
        </div>
      )}
      {status !== 'pending' && (
        <div className="middle-div">
          <div className="description">
            {caption}
          </div>
        </div>
      )}
      <div className="creation">
        {/* Si post en attente alors on donne la date précise
            sinon on donne la date partir du moment présent */}
        {status === 'pending'
          ? moment(publishAt).locale('fr').format('dddd D MMMM YYYY HH:mm')
          : moment(publishAt).locale('fr').fromNow()}
      </div>
    </div>
  </div>
);

Post.propTypes = {
  caption: PropTypes.string.isRequired,
  publishAt: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  ID: PropTypes.string.isRequired,
  updatePostStatus: PropTypes.func.isRequired,
};

// == Export
export default Post;
