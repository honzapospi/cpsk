import api from './api';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteNotice, getList} from './actions';

class RemindList extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         data: []
    //     };
    //     //console.log('create');
    // }

    componentWillMount(){
        this.props.getList().then(data => console.log(data));
        // $.getJSON('http://skoleni.anywhere.cz/react/remindme/api/notice', (data, status) => {
        //     if(status == 'success'){
        //         this.setState({data: data.data});
        //     }
        // })

        // let response = api.getItems();
        // response.then(data => {
        //     this.setState({data: data.data.data})
        // });
    }

    render(){
        return <div><h1>List</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Period</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.renderBody()}
                </tbody>
            </table>
        </div>
    }

    handleDeleteItem(id){
        this.props.deleteNotice(id);
    }

    renderBody(){
        if(this.props.list.length){
            return this.props.list.map(item => {
                return <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.date}</td>
                    <td>{item.period}</td>
                    <td><span style={{cursor: 'pointer'}} onClick={() => {this.handleDeleteItem(item.id)}}>delete</span></td>
                </tr>
            });
        } else {
            return <tr><td colSpan="5">Loading...</td></tr>

        }

    }
}

function mapStateToProps(state) {
    return {
        list: state.remind_list
    }
}

export default connect(mapStateToProps, {deleteNotice, getList})(RemindList);