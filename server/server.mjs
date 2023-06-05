import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import path from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs, resolvers } from './schemas'; // Import your GraphQL schema
import mongoose from 'mongoose'; // Import mongoose

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/tall-talk-react', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, '../client')));

// Create a GraphQL schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// GraphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Handle requests and serve the index.html file for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
