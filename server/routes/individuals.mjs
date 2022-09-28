const express = require("express");
const db = require('./db/db-connection.js');

const router = express.Router();


//create the GET request
app.get('/api/individuals', async (req, res, next) => {
  try {
    const individuals = await db.any('SELECT * FROM individuals', [true]);
    res.send(individuals);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

module.exports = router;
