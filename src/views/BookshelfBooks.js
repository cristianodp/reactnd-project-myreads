import React from "react";

import Book from "./Book";

const BookshelfBooks = props => {
  const { title, books, handlerChangeShelf } = props;
  return (
    <div className="bookshelf">
      {title && <h2 className="bookshelf-title">{title}</h2>}
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            books.map((it) => (
              <li key={it.id}>
                <Book data={it} handlerChangeShelf={handlerChangeShelf} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default BookshelfBooks;
