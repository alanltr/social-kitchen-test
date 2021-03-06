// == Import npm
import React from 'react';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

// == Import
import './addPost.scss';

// == Composant
const AddPost = ({ toggleIsOpenModal }) => {
  const handleClick = ((e) => {
    toggleIsOpenModal();
  });

  return (
    <div className="addpost-component">
      <Paper>
        <Tab onClick={handleClick} name="pending" icon={<AddIcon />} aria-label="ajouter une publication" />
      </Paper>
    </div>
  );
};
// == Export
export default AddPost;
