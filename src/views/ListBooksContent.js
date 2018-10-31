import React from "react";
// import * as BooksAPI from './BooksAPI'

import BookshelfBooks from "./BookshelfBooks";

class ListBooksContent extends React.Component {
  render() {
    const { books,handlerChangeShelf } = this.props;
    return (
      <div className="list-books-content">
        <div>
          <BookshelfBooks
            title={"Currently Reading"}
            handlerChangeShelf={handlerChangeShelf}
            books={books && books.filter(it => it.shelf === "currentlyReading")}
          />
          <BookshelfBooks
            title={"Want to Read"}
            handlerChangeShelf={handlerChangeShelf}
            books={books && books.filter(it => it.shelf === "wantToRead")}
          />
          <BookshelfBooks
            title={"Read"}
            handlerChangeShelf={handlerChangeShelf}
            books={books && books.filter(it => it.shelf === "read")}
          />
        </div>
      </div>
    );
  }
}

export default ListBooksContent;
