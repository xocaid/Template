const express = require("express");
const db = require('./db/db-connection.js');

const router = express.Router();

// create the GET request
app.get('/api/sightings', async (req, res, next) => {
  try {
    const sightings = await db.any('SELECT * FROM sightings', [true]);
    res.send(sightings);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

module.exports = router;