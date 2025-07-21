const express = require('express');
const router = express.Router();
const { Place } = require('../../db');

router.get('/id/:id', async (req, res) => {
  try {
    const place = await Place.findByPk(req.params.id);
    if (!place) return res.status(404).send('Place not found');
    res.json(place);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;