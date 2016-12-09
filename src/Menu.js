import React from 'react';

const items = [
    {name: 'List', id: 1},
    {name: 'New', id: 2}
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
            return <MenuItem myid={item.id} key={item.id}>{item.name}</MenuItem>
        });
    },

});


class MenuItem extends React.Component {
    render(){
        let color = this.props.isActive ? 'red' : 'black';
        return <li style={{color: color}}>{this.props.children}</li>
    }

}