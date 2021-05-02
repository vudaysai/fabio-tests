import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import TimeAgo from 'javascript-time-ago';

// eslint-disable-next-line import/no-extraneous-dependencies
import en from 'javascript-time-ago/locale/en';

import './index.css';
import App from './App';
import worker from './mocks';

TimeAgo.addDefaultLocale(en);
worker.start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
