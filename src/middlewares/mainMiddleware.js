import axios from 'axios';

import {
  LOG_IN,
  ADD_POST,
  GET_POSTS,
  setToken,
  setPosts,
  setCompanyId,
  getPosts,
} from 'src/actions';

const apiBaseUrl = 'https://app-bf00fd5a-fca9-4375-8cdb-44d461521b8f.cleverapps.io';

const mainMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      axios.post(`${apiBaseUrl}/api/v1/authentication/`, {
        email: 'test-socialkitchen@socialkitchen.fr',
        password: 'Hn4E$Jx#5&43L9S5',
        keepAlive: true,
      })
        .then((res) => {
          store.dispatch(setCompanyId(res.data.companies[0].ID));
          store.dispatch(setToken(res.data.jwt));
          // On recupere les posts ici pour l'instant
          store.dispatch(getPosts());
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    case GET_POSTS: {
      const { companyID, token } = store.getState().main;

      axios.get(`${apiBaseUrl}/api/v1/publication/?companiesIDs=${companyID}`, {
        headers: { 'X-SK-Authorization': `Bearer ${token}` },
      }).then((res) => {
        store.dispatch(setPosts(res.data));
      }).catch((err) => {
        console.log('err', err);
      });

      next(action);
      break;
    }

    case ADD_POST: {
      const {
        image,
        caption,
        companyID,
        token,
      } = store.getState().main;

      axios.post(`${apiBaseUrl}/api/v1/publication/`, {
        image,
        caption,
        companiesIDs: [
          companyID,
        ],
      }, {
        headers: { 'X-SK-Authorization': `Bearer ${token}` },
      }).then(() => {
        store.dispatch(getPosts());
      }).catch((err) => {
        console.log('err', err);
      });

      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default mainMiddleware;
