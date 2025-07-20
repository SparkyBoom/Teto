
const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET by ID
router.get('/id/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      \`SELECT id, name, ST_AsGeoJSON(geometry) AS geometry 
       FROM places WHERE id = $1\`,          // 🔁 change 'places' to your table name
      [id]
    );
    if (result.rows.length === 0) return res.status(404).send('Place not found');
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET by name
router.get('/name/:name', async (req, res) => {
  const { name } = req.params;
  try {
    const result = await pool.query(
      \`SELECT id, name, ST_AsGeoJSON(geometry) AS geometry 
       FROM places WHERE name ILIKE $1\`,    // 🔁 change 'places' to your table name
      [name]
    );
    if (result.rows.length === 0) return res.status(404).send('Place not found');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// POST new place
router.post('/', async (req, res) => {
  const { name, geometry } = req.body;
  if (!name || !geometry) return res.status(400).send('Missing name or geometry');

  try {
    const result = await pool.query(
      \`INSERT INTO places (name, geometry)        -- 🔁 change 'places' to your table name
       VALUES ($1, ST_SetSRID(ST_GeomFromGeoJSON($2), 4326)) 
       RETURNING id, name, ST_AsGeoJSON(geometry) AS geometry\`,
      [name, JSON.stringify(geometry)]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// PUT update by ID
router.put('/id/:id', async (req, res) => {
  const { id } = req.params;
  const { name, geometry } = req.body;

  if (!name || !geometry) return res.status(400).send('Missing name or geometry');

  try {
    const result = await pool.query(
      \`UPDATE places                                -- 🔁 change 'places' to your table name
       SET name = $1, geometry = ST_SetSRID(ST_GeomFromGeoJSON($2), 4326) 
       WHERE id = $3 
       RETURNING id, name, ST_AsGeoJSON(geometry) AS geometry\`,
      [name, JSON.stringify(geometry), id]
    );
    if (result.rows.length === 0) return res.status(404).send('Place not found');
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// DELETE by ID
router.delete('/id/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      \`DELETE FROM places WHERE id = $1 RETURNING id\`,  // 🔁 change 'places' to your table name
      [id]
    );
    if (result.rows.length === 0) return res.status(404).send('Place not found');
    res.send(\`Place with ID \${id} deleted\`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
