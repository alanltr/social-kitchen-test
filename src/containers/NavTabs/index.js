import { connect } from 'react-redux';

// on importe le composant de présentation
import NavTabs from 'src/components/Elements/NavTabs';

import { setCategoryToDisplay } from 'src/actions';

// === mapStateToProps
const mapStateToProps = (state) => ({

});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  setCategoryToDisplay: (category) => {
    dispatch(setCategoryToDisplay(category));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NavTabs);
