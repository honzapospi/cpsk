import React, {Component} from 'react';
import Menu from './Menu';
import NewNotice from './NewNotice';
import RemindList from './RemindList';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageId: 1
        };
    }

    goToPage(id){
        this.setState({
            pageId: id
        });
    }

    render() {
        return (
            <div>
                <Menu items={this.props.items} goToPage={this.goToPage.bind(this)} activeId={this.state.pageId} />
                {this.renderContent()}
            </div>
        )
    }

    renderContent(){
        if(this.state.pageId == 1)
            return <RemindList />
        else if(this.state.pageId == 2)
            return <NewNotice defaultName={'pepa'} defDes={'popis'} goToPage={this.goToPage.bind(this)} />
    }
}