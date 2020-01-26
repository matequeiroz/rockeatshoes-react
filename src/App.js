import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';

import './config/reactotron';

import store from './store';
import GlobalStyles from './styles/global';
import Header from './components/Header/index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes />
          <GlobalStyles />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
