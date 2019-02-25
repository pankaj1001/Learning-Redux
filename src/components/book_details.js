import React,{ Component } from "react";
import {connect} from 'react-redux';
class BookDetails extends Component{
    render(){
        if(!this.props.bk){
            return (
                <div>
                    Select a book to get started
                </div>
            )
        }
        return (
            <div>
                <h3>The Book details are</h3>
                <div>
                    <b>Title:</b> {this.props.bk.title}<br/>
                    <b>Pages:</b> {this.props.bk.pages}<br/>
                    <b>Author:</b> {this.props.bk.author}
                </div>
            </div>
        )
    }
}

function mapStateToPRops(state){
    return {
        bk:state.activeBook
    }
}
export default connect(mapStateToPRops)(BookDetails)