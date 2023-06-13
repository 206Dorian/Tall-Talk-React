import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import 'NavBar.js'
// import './App.css';
// import './NavBar.css';

import Header from './components/Header';
import Footer from './components/Footer';
import QuestionsPage from "./pages/QuestionsPage";

// replace the uri with your GraphQL server's url
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">

        <Header />
        <QuestionsPage />
        <Footer />

      </div>
    </ApolloProvider>

  )
}
export default App;