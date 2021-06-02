import {
  SET_TOKEN,
  SET_POSTS,
  SET_COMPANY_ID,
  SET_CATEGORY_TO_DISPLAY,
  TOGGLE_IS_OPEN_MODAL,
  CHANGE_FIELD,
  RESET_FORM,
  SET_IS_LOADING_APP,
} from 'src/actions';

const initialState = {
  token: '',
  companyID: '',
  isLoadingApp: true,
  // Posts
  posts: [],
  category: 'pending',
  // AddModal
  isOpenAddModal: false,
  caption: '',
  // Je met une valeur par defaut a image pour arreter de rentrer
  // de mauvaises valeurs (temporaire evidemment)
  image: 'qloAH4d0ezCtePA_E9mu1-1622367101445',
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

    case SET_CATEGORY_TO_DISPLAY:
      return {
        ...state,
        category: action.category,
      };

    case TOGGLE_IS_OPEN_MODAL:
      return {
        ...state,
        isOpenAddModal: !state.isOpenAddModal,
      };

    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case RESET_FORM:
      return {
        ...state,
        caption: '',
        image: '',
      };

    case SET_IS_LOADING_APP:
      return {
        ...state,
        isLoadingApp: action.bool,
      };

    default:
      return state;
  }
}

export default profileReducer;
