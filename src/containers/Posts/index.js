import { connect } from 'react-redux';

// on importe le composant de présentation
import Posts from 'src/components/Posts';

import { getPosts, updatePostStatus } from 'src/actions';

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
  updatePostStatus: (e) => {
    dispatch(updatePostStatus(e.currentTarget.name, e.currentTarget.value));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
