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
  setIsLoadingApp,
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
        // TODO pour régler le pb du loader qui est unset trop tot il faudrait voir ici
        // TODO on pourrait passer res.data en payload de getImage et l'exploiter la bas
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
        // J'ai rentré de mauvaises d'image valeurs lors de la création de 3 publications ce qui
        // provoque 3 erreurs 500 car ID de l'image inexistant
        // Je met cette condition car je ne peux modifier l'image d'une publication et je ne peux
        // pas la supprimer non plus. Ca permet d'avoir la console propre et aucun process bloquant
        if (post.image.length !== 35) {
          return;
        }

        axios.get(`${apiBaseUrl}/api/v1/image/${post.image}/?jwt=${token}&height=${height}&width=${width}`, {
          headers: { 'X-SK-Authorization': `Bearer ${token}` },
        }).then((res) => {
          // A chaque itération on injecte le chemin de notre image à la publication
          result.push({
            ...post,
            img: res.config.url,
          });

          // Quand on arrive à la fin de nos resultats on set notre tableau
          // ! Le -3 est la car l'image 3 publications provoquent une 500 et
          // ! je n'ai aucun moyen de modifier via le endpoint PUT
          // ! A noter que rajouter une publication non valide empecherait de
          // ! rentrer dans la condition
          if (result.length === posts.length - 4) {
            store.dispatch(setPosts(result));
            store.dispatch(setIsLoadingApp(false));
          }
        }).catch((err) => {
          console.log('err', err);
        });

        // Je profite de la boucle qui recupere les images pour checker si la date de publi
        // est passée ou non. L'api renvoit une 404 car 'published' n'est pas dans les termes
        // autorisés de ce endpoint
        // A voir si c'est bien de cette manière que l'actualisation se fait, ou via une api
        // tierce
        // ? if (Date.now() > post.publishAt && post.status === 'validate') {
        // ?   store.dispatch(updatePostStatus(post.ID, 'published'));
        // ? }
      });

      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default mainMiddleware;
