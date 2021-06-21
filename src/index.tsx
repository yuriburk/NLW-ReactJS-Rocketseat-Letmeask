import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import initializeFirebase from './services/firebase';

initializeFirebase();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
