import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import QuestionsPage from "./pages/QuestionsPage";
import QButton from './components/QButton';

// replace the uri with your GraphQL server's url
const client = new ApolloClient({
  uri: 'https://tall-talk-1dfa9fc02377.herokuapp.com/graphql',
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

  )
}
export default App;git status