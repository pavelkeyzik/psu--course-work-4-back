const express = require('express');
const router = express.Router();
const finesController = require('../../controllers/fines');

router.get('/', finesController.getAllFines);

module.exports = router;