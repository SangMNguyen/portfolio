import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import './styles/branding.css';
import './styles/index.css';
import './styles/mobile.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter basename="/">
        <App />
    </HashRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
