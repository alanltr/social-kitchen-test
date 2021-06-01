// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './posts.scss';

import Post from './Post';

// == Composant
const Posts = ({ posts }) => (
  <div className="posts-component">
    {posts.map((post) => <Post key={post.ID} {...post} />)}
  </div>
);

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

// == Export
export default Posts;
