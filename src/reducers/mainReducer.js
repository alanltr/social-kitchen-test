import {
  SET_TOKEN,
  SET_POSTS,
  SET_COMPANY_ID,
} from 'src/actions';

const initialState = {
  token: '',
  companyID: '',
  // Posts
  posts: [],
};

function profileReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case SET_POSTS:
      return {
        ...state,
        posts: action.array,
      };

    case SET_COMPANY_ID:
      return {
        ...state,
        companyID: action.id,
      };

    default:
      return state;
  }
}

export default profileReducer;
