import React from 'react';

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
        return this.props.items.map((item) => {
            return <MenuItem onClickItem={this.props.goToPage} isActive={this.props.activeId == item.id} myid={item.id} key={item.id}>{item.name}</MenuItem>
        });
    },

    // handleOnClick: function () {
    //     this.setState({
    //         color: 'green'
    //     });
    // }
});


class MenuItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        let color = this.props.isActive ? 'red' : 'black';
        return <li style={{color: color}} onClick={this.handleClick.bind(this)}>{this.props.children}</li>
    }

    handleClick(){
        this.props.onClickItem(this.props.myid);
    }
}