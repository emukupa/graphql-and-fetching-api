const server = require('./app');
require('dotenv').config();
const PORT = process.env.PORT || 8080;

server.listen(PORT, err => {
  if (err) return console.log(`\n\u274C  Encountered an erro: ${err}\n`);
  console.log(`\n\u2705  Server running on port ${PORT}\n`);
});
