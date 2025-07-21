const express = require('express');
const router = express.Router();
const { Place } = require('../../db');

router.get('/name/:name', async (req, res) => {
  try {
    const places = await Place.findAll({ where: { name: req.params.name } });
    if (!places.length) return res.status(404).send('Place not found');
    res.json(places);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;