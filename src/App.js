import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
        <GlobalStyles />
      </Router>
    </div>
  );
}

export default App;
