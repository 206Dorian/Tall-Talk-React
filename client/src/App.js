import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, from } from '@apollo/client';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import QuestionsPage from "./pages/QuestionsPage";
import QOTD from './components/QOTD';
import  './components/Questions.css';

const httpLink = createHttpLink({
  uri: "/graphql",
});

// replace the uri with your GraphQL server's url
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* <QOTD /> */}
        <Header />
        <QuestionsPage />
        <br></br>
        {/* <NavBar /> */}
        <Footer />
        <br />
      </div>
    </ApolloProvider>

  )
}
export default App;