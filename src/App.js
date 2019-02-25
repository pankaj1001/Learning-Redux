import React, { Component } from 'react';
import './App.css';
import BookList from './components/booklist';
import BookDetails from "./components/book_details";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>BookStore</h1>
        <div className="container">
        <div className="left">
          <BookList/>
        </div>
        <div className="right">
          <BookDetails/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
