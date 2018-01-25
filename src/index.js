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

store.dispatch(addEntry({title: '1st Post', entry: 'first post', createdAt: 0}))
store.dispatch(addEntry({title: '2nd Post', entry: 'second post', createdAt: 2000 }));
store.dispatch(addEntry({title: '3rd Post', entry: 'third post', createdAt: 3000 }));

const state = store.getState();

const visiblePosts = getVisiblePosts(state.posts, state.filters);

console.log(visiblePosts);
console.log(state);


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
