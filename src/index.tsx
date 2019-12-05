import React from 'react';
import ReactDOM from 'react-dom';
import App from './FirstComponent';
import Display from './Header_Comp'
import * as serviceWorker from './serviceWorker'; // eslint-disable-next-line
import { BrowserRouter,Switch,Route,Link } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <Route path="/log" component={Display}/>
    <App />
  </BrowserRouter>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
