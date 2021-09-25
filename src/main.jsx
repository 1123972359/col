import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { KEY } from './constant';

window.$save = (data = []) =>
  window.localStorage.setItem(KEY, JSON.stringify(data));

window.$getSave = () => JSON.parse(window.localStorage.getItem(KEY) || '[]');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
