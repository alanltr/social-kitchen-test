import { connect } from 'react-redux';

// on importe le composant de présentation
import AddModal from 'src/components/Elements/AddModal';

import { toggleIsOpenModal, changeField, addPost } from 'src/actions';

// === mapStateToProps
const mapStateToProps = (state) => ({
  isOpenAddModal: state.main.isOpenAddModal,
  caption: state.main.caption,
  image: state.main.image,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue) => {
    dispatch(changeField(newValue.target.value, newValue.target.name));
  },
  toggleIsOpenModal: () => {
    dispatch(toggleIsOpenModal());
  },
  addPost: () => {
    dispatch(addPost());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
