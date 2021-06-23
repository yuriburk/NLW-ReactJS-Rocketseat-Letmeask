import React from 'react';
import ReactDOM from 'react-dom';

import './services/firebase';
import App from './App';
import GlobalStyle from './styles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
