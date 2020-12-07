import React, { useEffect } from "react";
import {  useLazyQuery } from "@apollo/client";
import { getBookQeury } from "../queries/queries";

function BookDetails(props) {
  const [getBook, {  data }] = useLazyQuery(getBookQeury);
  useEffect(() => {
    if (props.data) {
      getBook({
        variables: { id: props.data }
      });
    }
  }, [props.data,getBook]);

  const displayBookDetails = () => {
    if (data) {
      const book = data.book;
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected</div>;
    }
  };
  const result = displayBookDetails();
  return (
    <div id="book-details">
      {result}
    </div>
  );
}

export default BookDetails;
