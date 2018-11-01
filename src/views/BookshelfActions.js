import React from "react";
// import * as BooksAPI from './BooksAPI'

const BookshelfActions = props => (
  <div className="book-shelf-changer">
    <select defaultValue={props.shelf} onChange={props.handlerChangeShelf}>
      <option value="move" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
);

export default BookshelfActions;
