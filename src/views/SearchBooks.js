import React from "react";
import { Link } from "react-router-dom";

import * as BooksAPI from "../utils/BooksAPI";
import BookshelfBooks from "./BookshelfBooks";

class SearchBooks extends React.Component {
  state = {
    booksFounded: [],
    query: ""
  };

  constructor() {
    super();
    this.findBooksByQuery = this.findBooksByQuery.bind(this);
  }

  handlerChangeSearchValue = e => {
    this.setState({ query: e.target.value });
  };

  handlerOnPressExecuteSearchBooks = e => {
    if (e.which === 13 || e.keyCode === 13) {
      this.findBooksByQuery(this.state.query);
      return false;
    }
  };

  isInBookshelf = (booksInShef, book) => {
    for (let shelfBook of booksInShef) {
      if (book.id === shelfBook.id) return shelfBook.shelf;
    }
    return "none";
  };

  mergeSearchAndBookshelf = (booksFounded, booksInShef) =>
    booksFounded.map(book => {
      let obj = book;
      obj.shelf = this.isInBookshelf(booksInShef, book);
      return obj;
    });

  findBooksByQuery = query => {
    const _this = this;
    if (query) {
      BooksAPI.search(query).then(booksFounded => {
        let newBooks = [];
        if (booksFounded.error !== "empty query") {
          newBooks = _this.mergeSearchAndBookshelf(
            booksFounded,
            _this.props.booksInShef
          );
        }
        _this.setState({ booksFounded: newBooks });
      });
    } else {
      this.setState({ booksFounded: [] });
    }
  };

  render() {
    const { booksFounded, query } = this.state;
    const { handlerChangeShelf } = this.props;
    console.log("booksFounded", booksFounded);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.handlerChangeSearchValue}
              onKeyPress={this.handlerOnPressExecuteSearchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {/* <ol className="books-grid" /> */}
          {booksFounded.length > 0 && (
            <BookshelfBooks
              books={booksFounded}
              handlerChangeShelf={(event, book) => {
                handlerChangeShelf(event, book, () => {
                  this.findBooksByQuery(this.state.query);
                });
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

export default SearchBooks;
