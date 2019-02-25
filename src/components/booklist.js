import React,{ Component } from "react";
import {selectedBook} from '../actions/index';
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';

class BookList extends Component{
    renderList(){
        return this.props.bk.map((book)=>{
            return (
                <li key={book.title}
                    onClick={()=>{
                        this.props.sb(book)
                    }}
                    >
                    {book.title}
                </li>
            )
        })
    }
    render(){
        return (
            <div><ul>{this.renderList()}</ul></div>
        )
    }
}

function mapStateToProps(state){
    return {
        bk:state.books
    }
}

function mapDispatchToProps(dispatch){

    return bindActionCreators({sb:selectedBook},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(BookList)