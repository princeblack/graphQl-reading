import { gql } from "@apollo/client";


const getBooksQeury = gql`
  {
    books {
      name
      id
    }
  }
`;

const getAuthorsQeury = gql`
  {
    authors {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation AddBook($name : String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`
const getBookQeury = gql `
  query($id: ID){
    book(id: $id){
      id
      name
      genre
      author{
        id
        name
        age
        books{
          name
          id
        }
      }
    }
  }
`

export {getAuthorsQeury , getBooksQeury, addBookMutation, getBookQeury}