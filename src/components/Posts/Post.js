// == Import npm
import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


// == Composant
const Post = ({
  caption,
  publishAt,
  image,
  status,
}) => (
  <div className="post-container">
    <div className="post-image">
      <img src={image} alt="" />
    </div>
    <div className="post-content">
      {status === 'pending' && (
        <div className="middle-div">
          <div className="button-div">
            <IconButton aria-label="validation">
              <CheckIcon className="valid" />
            </IconButton>
            <IconButton aria-label="refus">
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
        <Moment locale="fr" unix>{publishAt}</Moment>
      </div>
    </div>
  </div>
);

Post.propTypes = {
  caption: PropTypes.string.isRequired,
  publishAt: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

// == Export
export default Post;
