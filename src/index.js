import React, {Component} from 'react';
import {render} from 'react-dom';
import App from './App';
import {Router, Route, browserHistory} from 'react-router';


render(
    <Router history={browserHistory} >
        <Route path="/" component={App} />
    </Router>,
    document.getElementById('app'));
