import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';

//Actions
import { addEntry } from './actions/posts';
import { removeEntry } from './actions/posts';
import { editEntry } from './actions/posts';
import { setTextFilter } from './actions/filters';
import getVisiblePosts from './selectors/posts';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
