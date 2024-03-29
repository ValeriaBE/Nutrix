import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App.jsx';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
  , document.getElementById('root'));
serviceWorker.unregister();
