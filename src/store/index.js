import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';

import mainMiddleware from 'src/middlewares/mainMiddleware';


const enhancers = composeWithDevTools(
  applyMiddleware(
    mainMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
