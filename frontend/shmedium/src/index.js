//pkg imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
//file imports
import './index.css';
import App from './App';
import configureStore from './store';

//for to test store functionality on window
const store = configureStore();
if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

//root
function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
