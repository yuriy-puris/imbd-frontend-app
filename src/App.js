import React from 'react';

import Header from './components/sharedComponents/Header';
import Home from './Home';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
  <div className="app">
    <Header />
    <Home />
    <GlobalStyle />
  </div>
);

export default App;
