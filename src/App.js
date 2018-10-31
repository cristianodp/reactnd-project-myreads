import React from "react";
import { Route } from "react-router-dom";

import ListBooks from "./views/ListBooks";
import SearchBooks from "./views/SearchBooks";

import * as BooksAPI from "./utils/BooksAPI";

import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  handlerChangeShelf = (event, book, callback) => {
    
    BooksAPI.update(book, event.target.value).then(res => {
      BooksAPI.getAll().then(books => {
        this.setState({ books });
        callback && callback(true)
      });
    });
  };

  render() {
    const { books } = this.state;
    console.log("books",books)
    return (
      <div className="app">
        <Route exact  path="/"
          render={() => (
            <ListBooks
              books={books}
              handlerChangeShelf={this.handlerChangeShelf}
            />
          )}
        />
        <Route exact path="/search"
          render={() => (
            <SearchBooks
              booksInShef={books}
              handlerChangeShelf={this.handlerChangeShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
