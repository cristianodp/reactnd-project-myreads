import React from "react";
import { Link } from "react-router-dom";

import ListBooksContent from "./ListBooksContent";
import FloatButtom from "./FloatButtom";

class ListBooks extends React.Component {
  showSearchPage = () => {
    this.props.handlerShowSearchPage(true);
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <ListBooksContent
          books={this.props.books}
          handlerChangeShelf={this.props.handlerChangeShelf}
        />
        <FloatButtom>
          <Link to="/search">Add a book</Link>
        </FloatButtom>
        {/* <div className="loader-container">
          <div className="loader-backgroud">
            backgroud
          </div>
          <div className="loader" /> 
        </div>*/}
      </div>
    );
  }
}

export default ListBooks;
