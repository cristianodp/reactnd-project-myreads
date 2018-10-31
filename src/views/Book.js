import React from "react";
// import * as BooksAPI from './BooksAPI'

import BookshelfActions from "./BookshelfActions";

class Book extends React.Component {
  
  render() {
    const { data, handlerChangeShelf } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url("${data.imageLinks.thumbnail}")`
            }}
          />
          <BookshelfActions shelf={data.shelf}  handlerChangeShelf={(e)=>{
            handlerChangeShelf(e,data)
          }}/>
        </div>
        <div className="book-title">{data.title}</div>
        <div className="book-authors">{data.authors}</div>
      </div>
    );
  }
}

export default Book;
