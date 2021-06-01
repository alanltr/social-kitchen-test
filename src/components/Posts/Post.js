// == Import npm
import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';


// == Composant
const Post = ({
  caption,
  publishAt,
  image,
  status,
  ID,
  updatePostStatus,
}) => {
  const handleClick = ((e) => {
    console.log(e.currentTarget.name);
    console.log(e.currentTarget.value);
  });

  return (
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
          <Moment locale="fr" unix>{publishAt}</Moment>
        </div>
      </div>
    </div>
  );
};
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
