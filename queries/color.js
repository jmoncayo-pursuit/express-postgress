const db = require('../db/dbConfig');

const getAllColors = () => {
  // db.any() -- db is the connection to the db. `any` is one of the methods that say what kind of data we're expecting to get back. "any" specifically means we will be happy with ANY kind of data as in NO data, some data or just one piece of data

  try {
    const allColors = db.any('SELECT * FROM colors');
    return allColors;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllColors };
