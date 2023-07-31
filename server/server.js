require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const mongoose = require('mongoose');
const cors = require('cors');

const corsOptions = {
  origin: 'https://tall-talk-1dfa9fc02377.herokuapp.com/', 
  methods: ['GET', 'POST'], // Specify the allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed request headers
};

const PORT = process.env.PORT || 4000;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Enable CORS for all routes with the specified options
app.use(cors(corsOptions));

const connectToMongoDB = async () => {
  try {
    const uri = process.env.YOUR_CONNECTION_STRING;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');
    console.log('Current database:', mongoose.connection.db.databaseName);
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
};

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  connectToMongoDB();

  const clientBuildPath = path.resolve(__dirname, '..', 'client', 'build');

  if (process.env.NODE_ENV === 'production') {
    // Serve static files from the React client
    app.use(express.static(clientBuildPath));
  }

  // All other routes will be handled by the React client
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startApolloServer();
