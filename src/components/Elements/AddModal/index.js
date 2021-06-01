// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

// == Import
import './addModal.scss';

// == Composant
const AddModal = ({
  toggleIsOpenModal,
  changeField,
  addPost,
  isOpenAddModal,
  caption,
  image,
}) => {
  const handleSubmit = ((e) => {
    e.preventDefault();
    addPost();
  });

  const body = (
    <div className="modal-component">
      <h2 id="simple-modal-title">Contact Form</h2>
      <div id="simple-modal-description">
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            type="text"
            name="caption"
            value={caption}
            onChange={changeField}
            id="filled-secondary"
            label="Description"
            variant="filled"
          />
          <TextField
            type="text"
            name="image"
            value={image}
            onChange={changeField}
            id="filled-secondary"
            label="Image"
            variant="filled"
          />
          <div className="submit-btn-div">
            <button aria-label="submit-btn" type="submit">Valider ma publication</button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="addmodal-component">
      <Modal
        open={isOpenAddModal}
        onClose={toggleIsOpenModal}
        aria-labelledby="contact-form"
      >
        {body}
      </Modal>
    </div>
  );
};

AddModal.propTypes = {
  toggleIsOpenModal: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
  isOpenAddModal: PropTypes.bool.isRequired,
  caption: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
// == Export
export default AddModal;
