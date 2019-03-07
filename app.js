const express = require('express');
const morgan = require('morgan');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const app = express();
app.use(morgan('dev'));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

require('./rest')(app);
module.exports = app;
