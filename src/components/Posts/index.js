// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './posts.scss';

import Post from './Post';

// == Composant
const Posts = ({ posts, category }) => (
  <div className="posts-component">
    {posts.map((post) => (
      category === post.status && (
        <Post key={post.ID} {...post} />
      )
    ))}
  </div>
);

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};

// == Export
export default Posts;
