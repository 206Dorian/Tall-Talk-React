import express from 'express';
import mongoose from 'mongoose';
import { graphqlHTTP } from 'express-graphql';
import path from 'path';
import {typeDefs, resolvers} from './schemas'; // Import your GraphQL schema

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/your-database-name', {
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

// GraphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema, // Use your GraphQL schema
    graphiql: true, // Enable the GraphiQL interface for testing
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
