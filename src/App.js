import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyles from './styles/global';
import store from './store';
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
