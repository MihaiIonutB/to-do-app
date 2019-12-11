import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker'; // eslint-disable-next-line
import { DisplayPage } from './page-control';

//react-router
ReactDOM.render(
    <DisplayPage/>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
