import axios from 'axios';

import {
  LOG_IN,
  ADD_POST,
  GET_POSTS,
  UPDATE_POST_STATUS,
  GET_IMAGE,
  setToken,
  setPosts,
  setCompanyId,
  getPosts,
  resetForm,
  toggleIsOpenModal,
  getImage,
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
        store.dispatch(getImage(300, 175));
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
        // On charge les posts pour actualiser l'action
        store.dispatch(getPosts());
        // Puis on reset le formulaire et on enleve la modal
        store.dispatch(resetForm());
        store.dispatch(toggleIsOpenModal());
      }).catch((err) => {
        console.log('err', err);
      });

      next(action);
      break;
    }

    case UPDATE_POST_STATUS: {
      const { postID, value } = action;
      const { token } = store.getState().main;

      axios.put(`${apiBaseUrl}/api/v1/publication/set-status`, {
        publicationsIDs: [
          postID,
        ],
        status: value,
      }, {
        headers: { 'X-SK-Authorization': `Bearer ${token}` },
      }).then(() => {
        // On charge les posts pour actualiser l'action
        store.dispatch(getPosts());
      }).catch((err) => {
        console.log('err', err);
      });

      next(action);
      break;
    }

    case GET_IMAGE: {
      const { token, posts } = store.getState().main;
      const { width, height } = action;
      const result = [];

      posts.forEach((post) => {
        axios.get(`${apiBaseUrl}/api/v1/image/${post.image}/?jwt=${token}&height=${height}&width=${width}`, {
          headers: { 'X-SK-Authorization': `Bearer ${token}` },
        }).then((res) => {
          // A chaque itération on injecte le chemin de notre image à la publication
          result.push({
            ...post,
            img: res.config.url,
          });
          // TODO enlever le -2 quand les 2 images non chargées (car mauvais id) seront parties
          // Quand on arrive à la fin de nos resultats on set notre tableau
          if (result.length === posts.length - 2) {
            store.dispatch(setPosts(result));
          }
        }).catch((err) => {
          console.log('err', err);
        });
      });

      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default mainMiddleware;
