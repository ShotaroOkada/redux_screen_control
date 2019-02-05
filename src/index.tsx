import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from 'src/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxLogger from 'redux-logger';
import App from './containers/App/App';

export const store = createStore(
  rootReducer,
  applyMiddleware(ReduxLogger)
)
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
