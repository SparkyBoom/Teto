const express = require('express');
const router = express.Router();
const { Place } = require('../../db');

router.post('/', async (req, res) => {
  try {
    const newPlace = await Place.create({
      name: req.body.name,
      geometry: req.body.geometry
    });
    res.status(201).json(newPlace);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;