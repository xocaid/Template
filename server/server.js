const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db-connection.js');
const speciesRouter = ("./routes/species.mjs");
const individualsRouter = ("./routes/individuals.mjs");
const sightingsRouter = ("./routes/sightings.mjs");

// const app = express();

// const PORT = 5000;

app.set('port', process.env.PORT || 3000)

app.use(cors());
app.use(express.json());
app.use('/api/species', (speciesRouter));
app.use('/api/individuals', (individualsRouter));
app.use('/api/sightings', (sightingsRouter));

// creates an endpoint for the route /api
app.get('/', (req, res) => {
  res.json({ message: 'Hello from My template ExpressJS' });
});

//****************** SPECIES *****************
// create the GET request
// app.get('/api/species', cors(), async (req, res) => {
//   try {
//     const { rows: species } = await db.query('SELECT * FROM species');
//     res.send(species);
//   } catch (e) {
//     return res.status(400).json({ e });
//   }
// });

// // create the POST request
// app.post('/api/species', cors(), async (req, res) => {
//   const newSpecies = {
//     name: req.body.name,
//     type: req.body.type,
//     population: req.body.population,
//     created_on: req.body.created_on,
//   };
//   console.log([newSpecies.name, newSpecies.type, newSpecies.population, newSpecies.created_on]);
//   const result = await db.query(
//     'INSERT INTO species(name, type, population, created_on) VALUES($1, $2, $3, $4) RETURNING *',
//     [newSpecies.name, newSpecies.type, newSpecies.population, newSpecies.created_on],
//   );
//   console.log(result.rows[0]);
//   res.json(result.rows[0]);
// });

// //****************** INDIVIDUALS *****************
// //create the GET request
// app.get('/api/individuals', cors(), async (req, res) => {
//   try {
//     const { rows: individuals } = await db.query('SELECT * FROM individuals');
//     res.send(individuals);
//   } catch (e) {
//     return res.status(400).json({ e });
//   }
// });

// //****************** SIGHTINGS *****************
// // create the GET request
// app.get('/api/sightings', cors(), async (req, res) => {
//   try {
//     const { rows: sightings } = await db.query('SELECT * FROM sightings');
//     res.send(sightings);
//   } catch (e) {
//     return res.status(400).json({ e });
//   }
// });

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});