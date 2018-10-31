import React from "react";
// import * as BooksAPI from './BooksAPI'

import Book from "./Book";

class BookshelfBooks extends React.Component {
  render() {
    const { title, books , handlerChangeShelf} = this.props;
    
    return (
      <div className="bookshelf">
        {title && <h2 className="bookshelf-title">{title}</h2>}
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books && books.map((it, idx) => (
              <li key={idx}>
                <Book data={it} handlerChangeShelf={handlerChangeShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookshelfBooks;
