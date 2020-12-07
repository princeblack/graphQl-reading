import React from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import {ApolloProvider} from '@apollo/client';

// components
import BookList from "./components/BookList"
import AddBook from "./components/AddBook"

// Apollo client setup
const client = new ApolloClient({
  uri:'https://graph-ql-reading-server.vercel.app/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <BookList/>
        <AddBook/>
    </div>
    </ApolloProvider>
  );
}

export default App;
