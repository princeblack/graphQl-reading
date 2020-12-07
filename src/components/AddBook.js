import React , {useState}from "react";
import { useQuery, useMutation } from "@apollo/client";
import {getAuthorsQeury, addBookMutation,getBooksQeury} from "../queries/queries"

function AddBook(props) {
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('')

    const handleName = (event)=>{
        setName(event.target.value)

    }
    const handleGenre = (event)=>{
        setGenre(event.target.value)

    }
    const handleAuthorId = (event)=>{
        setAuthorId(event.target.value)
    }


    function DispatchAuthors() {
        const { loading, error, data } = useQuery(getAuthorsQeury);

        if (loading) {
          return <option disabled>Loading Authors..</option>;
        } else if (error) {
          return <p>Error :(</p>;
        } else {
          const bookdata = data.authors;
          return bookdata.map((author) => {
            return <option key={author.id} value={author.id}>{author.name}</option>
          });
        }
      }
      const results = DispatchAuthors();

      const [createPost, { loading}] = useMutation(addBookMutation);

    const submitForm = (event)=>{
        event.preventDefault();
        createPost({variables:{name : name, genre: genre, authorId: authorId},
            refetchQueries: [{ query: getBooksQeury }]
        })
    }

  return (
    <form id="add-book" onSubmit={submitForm}>     
      <div className="field">
        <label>Book name:</label>
        <input onChange={handleName}></input>
      </div>
      <div className="field">
        <label>Genre:</label>
        <input onChange={handleGenre}></input>
      </div>
      <div className="field">          
        <label>Author:</label>
        <select onChange={handleAuthorId}>
          <option>Select author</option>
          {results}
        </select>
      </div>
      <button type="submit">+</button>
    </form>
  );
}

export default AddBook;
