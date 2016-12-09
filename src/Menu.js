import React from 'react';
import {Link} from 'react-router';

const items = [
    {
        name: 'List',
        id: 1,
        path: '/'
    },
    {
        name: 'New',
        id: 2,
        path: '/new/'
    }
];

export default React.createClass({

    render: function () {
        return (
            <div>
                <h1>Menu</h1>
                <ul>
                    {this.renderItems()}
                </ul>
            </div>
        )
    },

    renderItems: function () {
        return items.map((item) => {
            return <MenuItem myid={item.id} path={item.path} key={item.id}>{item.name}</MenuItem>
        });
    },

});


class MenuItem extends React.Component {
    render(){
        let color = this.props.isActive ? 'red' : 'black';
        return (
            <li style={{color: color}}>
                <Link to={this.props.path}>{this.props.children}</Link>
            </li>
        )
    }

}