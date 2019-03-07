const Query = require('./Query');
const Mutation = require('./Mutation');

const root = { ...Query, ...Mutation };

module.exports = root;
