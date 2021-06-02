import { connect } from 'react-redux';

// on importe le composant de présentation
import PersonalSnackbar from 'src/components/Elements/PersonnalSnackbar';

import { toggleIsOpenSnackbar } from 'src/actions';

// === mapStateToProps
const mapStateToProps = (state) => ({
  isASuccess: state.main.isASuccess,
  successMessage: state.main.successMessage,
  isOpenSnackbar: state.main.isOpenSnackbar,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  toggleIsOpenSnackbar: (newBool) => {
    console.log(newBool);
    dispatch(toggleIsOpenSnackbar(newBool));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(PersonalSnackbar);
