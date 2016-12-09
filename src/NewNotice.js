import React, {Component} from 'react';
import api from './api';
import {addNotice} from './actions';
import {connect} from 'react-redux';

class NewNotice extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.defaultName || ''
        };
    }

    render (){
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Name</label><input onChange={this.handleChangeName.bind(this)} value={this.state.name} /><br />
                <label>Date</label><input ref="date" /><br />
                <label>Description</label><input ref="description" defaultValue={this.props.defDes} /><br />
                <input type="submit" value="Send" onClick={this.handleSave.bind(this)} />
            </form>
        )
    }

    handleSave(e){
        e.preventDefault();
        // let p = api.createNotice(this.state.name, this.refs.description.value, '2016-10-10 10:10:10', 'week');
        // p.then(() => {
        //     this.props.goToPage(1);
        // }).catch(e => {
        //     alert(e);
        // });
        this.props.actionAddNotice(this.state.name, this.refs.description.value, '2016-10-10 10:10:10', 'week');
        this.context.router.push('/');
        //this.props.history.push('/');
    }

    handleChangeName(e){
        if(e.target.value.length > 10){
            alert('Name is too long.');
        } else {
            this.setState({
                name: e.target.value
            });
        }


    }
}

NewNotice.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(null, {actionAddNotice: addNotice})(NewNotice);