// const { buildSchema } = require('graphql');
const fetched_data = require('../fetched_data');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require('graphql');
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);
const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'Book',
  fields: () => ({
    title: {
      type: GraphQLString,
      resolve: async book => await book.title[0],
    },
    isbn: {
      type: GraphQLString,
      resolve: async book => await book.isbn[0],
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'Author',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: async json => await json.GoodreadsResponse.author[0].name[0],
    },
    books: {
      type: GraphQLList(BookType),
      resolve: async json =>
        await json.GoodreadsResponse.author[0].books[0].book,
    },
  }),
});

schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'Query Type',
    fields: () => ({
      author: {
        type: AuthorType,
        args: {
          id: {
            type: GraphQLInt,
          },
        },
        resolve: async (root, args) => await fetched_data(args.id),
      },
    }),
  }),
});

module.exports = schema;
