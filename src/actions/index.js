export const LOG_IN = 'LOG_IN';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_POSTS = 'SET_POSTS';
export const GET_POSTS = 'GET_POSTS';
export const SET_COMPANY_ID = 'SET_COMPANY_ID';
export const SET_CATEGORY_TO_DISPLAY = 'SET_CATEGORY_TO_DISPLAY';
export const ADD_POST = 'ADD_POST';
export const TOGGLE_IS_OPEN_MODAL = 'TOGGLE_IS_OPEN_MODAL';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const UPDATE_POST_STATUS = 'UPDATE_POST_STATUS';

export const logIn = () => ({
  type: LOG_IN,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const setPosts = (array) => ({
  type: SET_POSTS,
  array,
});

export const getPosts = () => ({
  type: GET_POSTS,
});

export const setCompanyId = (id) => ({
  type: SET_COMPANY_ID,
  id,
});

export const setCategoryToDisplay = (category) => ({
  type: SET_CATEGORY_TO_DISPLAY,
  category,
});

export const addPost = () => ({
  type: ADD_POST,
});

export const toggleIsOpenModal = () => ({
  type: TOGGLE_IS_OPEN_MODAL,
});

export const changeField = (newValue, name) => ({
  type: CHANGE_FIELD,
  newValue,
  name,
});

export const updatePostStatus = (postID, value) => ({
  type: UPDATE_POST_STATUS,
  postID,
  value,
});
