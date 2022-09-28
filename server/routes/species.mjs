const express = require("express");
const db = require('./db/db-connection.js');

const router = express.Router();

// create the GET request
app.get('/api/species', async (req, res, next) => {
  try {
    const species = await db.any('SELECT * FROM species', [true]);
    res.send(species);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// create the POST request
app.post('/api/species', async (req, res) => {
  const species = {
    name: req.body.name,
    type: req.body.type,
    population: req.body.population,
    created_on: req.body.created_on,
  };
  console.log([species.name, species.type, species.population, species.created_on]);
  
  try{
  const createdSpecies = await db.one(
    'INSERT INTO species(name, type, population, created_on) VALUES($1, $2, $3, $4) RETURNING *',
    [species.name, species.type, species.population, species.created_on],
  );
  console.log(createdSpecies);
  res.send(createdSpecies);
  }catch (e){
    return res.status(400).json({ e });
  }
});
module.exports = router;