import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../src/Styles/Globals.scss';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';
// import { GraphQLClient } from 'graphql-request';
// import { gql } from '@apollo/client';

// const graphqlAPI = process.env.REACT_APP_GRAPHQL_URI

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URI
})

const authLink = setContext((_, {headers}) => {
  const token = process.env.GRAPHCMS_TOKEN
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})








// const client = new ApolloClient({
//   uri: process.env.REACT_APP_GRAPHQL_URI,
//   cache: new InMemoryCache(),
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client = {client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
