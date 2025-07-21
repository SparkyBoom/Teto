const express = require('express');
const router = express.Router();
const { Place } = require('../../db');

router.patch('/id/:id', async (req, res) => {
  try {
    const place = await Place.findByPk(req.params.id);
    if (!place) return res.status(404).send('Place not found');

    if (req.body.name !== undefined) place.name = req.body.name;
    if (req.body.geometry !== undefined) place.geometry = req.body.geometry;

    await place.save();
    res.json(place);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;