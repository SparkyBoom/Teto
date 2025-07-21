const express = require('express');
const router = express.Router();
const { Place } = require('../../db');

router.delete('/id/:id', async (req, res) => {
  try {
    const count = await Place.destroy({ where: { id: req.params.id } });
    if (count === 0) return res.status(404).send('Place not found');
    res.send(`Place with ID ${req.params.id} deleted`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;