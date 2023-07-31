import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import QuestionsPage from "./pages/QuestionsPage";
import QButton from './components/QButton';

// Set the default server URL here (your deployed Heroku URL)
const defaultServerUrl = 'https://tall-talk-1dfa9fc02377.herokuapp.com/graphql';

// Use the environment variable if set, otherwise fallback to the default URL
const serverUrl = process.env.REACT_APP_GRAPHQL_SERVER || defaultServerUrl;

const client = new ApolloClient({
  uri: serverUrl,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <NavBar />
        <Header />
        <QuestionsPage />
        <Footer />
        <br />
      </div>
    </ApolloProvider>
  );
}

export default App;
