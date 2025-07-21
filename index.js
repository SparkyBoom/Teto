const express = require('express');
const router = express.Router();

router.use(require('./getById'));
router.use(require('./getByName'));
router.use(require('./postPlace'));
router.use(require('./patchById'));
router.use(require('./deleteById'));

module.exports = router;