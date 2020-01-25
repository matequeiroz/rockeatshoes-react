import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
        <GlobalStyles />
      </Router>
    </div>
  );
}

export default App;
