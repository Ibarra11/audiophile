import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyles from './shared/css/global';
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
