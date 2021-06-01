// == Import npm
import React from 'react';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

// == Import
import './addPost.scss';

// == Composant
const AddPost = () => (
  <div className="addpost-component">
    <Paper>
      <Tab name="pending" icon={<AddIcon />} aria-label="en attente" />
    </Paper>
  </div>
);
// == Export
export default AddPost;
