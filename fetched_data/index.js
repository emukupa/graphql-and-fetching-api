const superagent = require('superagent');
const xml2js_promise = require('node-xml2js-promise');
require('dotenv').config();

const { AUTHOR_URL, BOOK_URL, XML_PAGE, KEY } = process.env;
module.exports = {
  fetch_author: async id => {
    const URL = `${AUTHOR_URL}/${XML_PAGE}?id=${id}&key=${KEY}`;
    return await superagent
      .get(URL)
      .then(res => Buffer.from(res.body, 'binary').toString('utf-8'))
      .then(xml2js_promise)
      .catch(err => console.log(err));
  },
  fetch_book: async id => {
    const URL = `${BOOK_URL}/${id}.xml?key=${KEY}`;
    return await superagent
      .get(URL)
      .then(res => Buffer.from(res.body, 'binary').toString('utf-8'))
      .then(xml2js_promise)
      .catch(err => console.log(err));
  },
};
