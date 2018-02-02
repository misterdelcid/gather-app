import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import App from './routers/App';
import registerServiceWorker from './registerServiceWorker';
import './firebase/firebase';

//Actions
import { startSetPosts } from './actions/posts';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <div className="loading-page">
    <img src="./logo-small.png" className="loading-logo" alt="logo" />
  <div className="loading">
    <div className="dot dot-1"></div>
    <div className="dot dot-2"></div>
    <div className="dot dot-3"></div>
  </div>
</div>, document.getElementById('root'));

store.dispatch(startSetPosts()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root'));
  registerServiceWorker();
});
