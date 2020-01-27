import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import './config/reactotron';

import store from './store';
import GlobalStyles from './styles/global';
import Header from './components/Header/index';

import history from './config/history';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={5000} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
