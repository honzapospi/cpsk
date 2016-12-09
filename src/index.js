import React, {Component} from 'react';
import {render} from 'react-dom';
import App from './App';
import {Router, Route, IndexRoute, browserHistory, hashHistory, createMemoryHistory} from 'react-router';
import RemindList from './RemindList';
import NewNotice from './NewNotice';

render(
    <Router history={browserHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={RemindList} />
            <Route path="new/" component={NewNotice}></Route>
        </Route>
    </Router>,
    document.getElementById('app'));
