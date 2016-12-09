import api from './api';
import React, {Component} from 'react';

export default class RemindList extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
        //console.log('create');
    }

    componentWillMount(){
        // $.getJSON('http://skoleni.anywhere.cz/react/remindme/api/notice', (data, status) => {
        //     if(status == 'success'){
        //         this.setState({data: data.data});
        //     }
        // })

        let response = api.getItems();
        response.then(data => {
            this.setState({data: data.data.data})
        });
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

    renderBody(){
        if(this.state.data.length){
            return this.state.data.map(item => {
                return <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.date}</td>
                    <td>{item.period}</td>
                    <td><a href="">delete</a></td>
                </tr>
            });
        } else {
            return <tr><td colSpan="5">Loading...</td></tr>

        }

    }
}