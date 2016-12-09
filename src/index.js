import React, {Component} from 'react';
import {render} from 'react-dom';
import App from './App';
import {Router, Route, IndexRoute, browserHistory, hashHistory, createMemoryHistory} from 'react-router';
import RemindList from './RemindList';
import NewNotice from './NewNotice';
import {createStore} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <Router history={browserHistory} >
            <Route path="/" component={App}>
                <IndexRoute component={RemindList} />
                <Route path="new/" component={NewNotice}></Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app'));
