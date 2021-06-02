import { connect } from 'react-redux';

// on importe le composant de présentation
import App from 'src/components/App';

import { logIn } from 'src/actions';

// === mapStateToProps
const mapStateToProps = (state) => ({
  isLoadingApp: state.main.isLoadingApp,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  logIn: () => {
    dispatch(logIn());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
