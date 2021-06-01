import { connect } from 'react-redux';

// on importe le composant de présentation
import Posts from 'src/components/Posts';

import { getPosts } from 'src/actions';

// === mapStateToProps
const mapStateToProps = (state) => ({
  posts: state.main.posts,
  category: state.main.category,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  getPosts: () => {
    dispatch(getPosts());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
