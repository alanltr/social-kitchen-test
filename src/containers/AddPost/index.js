import { connect } from 'react-redux';

// on importe le composant de présentation
import AddPost from 'src/components/Elements/AddPost';

import { toggleIsOpenModal } from 'src/actions';

// === mapStateToProps
const mapStateToProps = (state) => ({
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  toggleIsOpenModal: () => {
    dispatch(toggleIsOpenModal());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
