import React, {useState} from "react";
import {useQuery } from "@apollo/client";
import {getBooksQeury} from "../queries/queries"
import BookDetails from "./BookDetails";



function BookList(props) {
  const [selected, setSelected] = useState(null)
  const { loading, error, data } = useQuery(getBooksQeury);

  function dispatchBooks() {
    if (loading) {
      return <p>Loading books...</p>;
    } else if (error) {
      return <p>Error :(</p>;
    } else {
      const bookdata = data.books;
      return bookdata.map((book) => {
        return <li key={book.id} onClick={(e)=>{setSelected(book.id)}}>{book.name}</li>;
      });
    }
  }
  const results = dispatchBooks();
  return (
    <div>
      <ul id="book-list">{results}</ul>
      <BookDetails data={selected}/>
    </div>
  );
}

export default BookList;
