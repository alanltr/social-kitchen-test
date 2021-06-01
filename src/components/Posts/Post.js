// == Import npm
import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

// == Composant
const Post = ({
  caption,
  publishAt,
  image,
}) => (
  <div className="post-container">
    <div className="post-image">
      <img src={image} alt="" />
    </div>
    <div className="post-content">
      <div className="description">
        {caption}
      </div>
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
};

// == Export
export default Post;
