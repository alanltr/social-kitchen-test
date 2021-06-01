export const LOG_IN = 'LOG_IN';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_POSTS = 'SET_POSTS';
export const GET_POSTS = 'GET_POSTS';
export const SET_COMPANY_ID = 'SET_COMPANY_ID';
export const SET_CATEGORY_TO_DISPLAY = 'SET_CATEGORY_TO_DISPLAY';

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
