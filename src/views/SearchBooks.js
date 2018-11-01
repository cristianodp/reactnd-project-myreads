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
    const query = e.target.value
    this.setState({ query });
    this.findBooksByQuery(query);
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
            />
          </div>
        </div>
        <div className="search-books-results">
          {/* <ol className="books-grid" /> */}
          {booksFounded.length > 0 && query !== "" && (
            <BookshelfBooks
              books={booksFounded}
              handlerChangeShelf={(event, book) => {
                handlerChangeShelf(event, book, () => {
                  window.location.href = window.location.href.replace('search','')
                  //this.findBooksByQuery(this.state.query);

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
