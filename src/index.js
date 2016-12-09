import React, {Component} from 'react';
import {render} from 'react-dom';
import App from './App';

const items = [
    {name: 'List', id: 1},
    {name: 'New', id: 2}
];


render(<App items={items} />, document.getElementById('app'));

