import React from "react";
// import * as BooksAPI from './BooksAPI'

import BookshelfActions from "./BookshelfActions";

const Book = props => {
  const { data, handlerChangeShelf } = props;
  const { imageLinks, title, authors, shelf } = data;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${imageLinks ? imageLinks.thumbnail : ""}")`
          }}
        />
        <BookshelfActions
          shelf={shelf}
          handlerChangeShelf={e => {
            handlerChangeShelf(e, data);
          }}
        />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

export default Book;
