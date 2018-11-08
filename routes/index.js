const express = require('express');
const router = express.Router();
const finesRouter = require('./fines');

router.use('/fines', finesRouter);

module.exports = router;