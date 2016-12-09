import React, {Component} from 'react';
import Menu from './Menu';
import NewNotice from './NewNotice';
import RemindList from './RemindList';

export default class App extends Component {
    render() {
        return (
            <div>
                <Menu />
            </div>
        )
    }
}